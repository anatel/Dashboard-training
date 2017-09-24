import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {Checkbox} from "../interfaces";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";


export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR, // Once our component implements the ControlValueAccessor interface,
  // we need to tell Angular about it by providing it as a NG_VALUE_ACCESSOR so that it can be used.
  useExisting: forwardRef(() => CheckboxComponent),
  multi: true
};

@Component({
  selector: 'checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR] // What does this do?
})
export class CheckboxComponent implements OnInit, ControlValueAccessor {
  private static id = 0;
  public cbkImg: string;
  public checked: boolean;
  public uniqueId: string;

  private _cbkStyle: Checkbox;

  @Input('cbkStyle')
  public set cbkStyle(val: Checkbox) {
    this._cbkStyle = val;
    this.cbkImg = this.checked ? val.checkedImg : val.uncheckedImg;
  }

  public get cbkStyle() {
    return this._cbkStyle;
  }

  constructor() {
    CheckboxComponent.id++;
    this.uniqueId = 'cbk' + CheckboxComponent.id;
  }

  ngOnInit() {
    this.cbkStyle = this.cbkStyle || {
        checkedImg: 'checkbox_checked.png',
        uncheckedImg: 'checkbox.png',
        width: '13px',
        height: '13px'
      };
    this.toggleImg();
  }

  onChange = (checked: boolean) => {
  };

  public toggleCbk() {
    this.toggleImg();
    this.onChange(this.checked);
  }

  private toggleImg() {
    this.cbkImg = this.checked ? this.cbkStyle.checkedImg : this.cbkStyle.uncheckedImg;
  }

  // From ControlValueAccessor interface
  writeValue(value: boolean) {
    if (value !== this.checked) {
      this.checked = value;
      this.toggleImg();
      this.onChange(value);
    }
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {
  }

  // From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
}
