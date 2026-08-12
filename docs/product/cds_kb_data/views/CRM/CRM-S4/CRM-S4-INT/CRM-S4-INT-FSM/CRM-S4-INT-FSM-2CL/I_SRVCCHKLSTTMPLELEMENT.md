---
name: I_SRVCCHKLSTTMPLELEMENT
description: "Checklist Template Elements"
app_component: CRM-S4-INT-FSM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCCHKLSTTMPLELEMENT')/$value
semantic_en: "Checklist Template Elements"
semantic_vi: "Checklist Template Elements — CDS view cơ bản dựa trên crmd_fsm_tm_elm."
keywords:
  - "Checklist Template All Elements"
  - "checklist"
  - "template"
  - "elements"
  - "service"
  - "srvc"
  - "element"
  - "chklst"
  - "tmpl"
  - "parent"
  - "elmnt"
  - "sqnc"
  - "nmbr"
  - "type"
tags:
  - CRM
  - component:CRM-S4-INT-FSM-2CL
  - CRM-S4
  - CRM-S4-INT
  - CRM-S4-INT-FSM
  - CRM-S4-INT-FSM-2CL
  - interface-view
---
# I_SRVCCHKLSTTMPLELEMENT

**Checklist Template Elements**

| Property | Value |
|---|---|
| App Component | `CRM-S4-INT-FSM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCCHKLSTTMPLELEMENT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceChecklistTemplate` | ✓ | |  | `template_id` | `CHAR(10)` | Template ID |
| `SrvcChecklistTemplateElement` | ✓ | |  | `element_id` | `NUMC(4)` | Element ID |
| `SrvcChklstTmplParentElement` |  | |  | `parent_element_id` | `NUMC(4)` | Parent Element ID |
| `SrvcChklstTmplElmntSqncNmbrVal` |  | |  | `seqnr` | `INT4(10)` | Sequence Number |
| `SrvcChklstTmplElementType` |  | |  | `type` | `CHAR(2)` | Element Type |
| `SrvcChklstTmplElementSubtype` |  | |  | `subtype` | `CHAR(10)` | Element Subtype |
| `SrvcChklstTmplFSMElement` |  | |  | `fsm_element_id` | `CHAR(255)` | FSM Element ID |
| `SrvcChklstTmplElmntMinRowsVal` |  | |  | `min_rows` | `INT2(5)` | Minimum number of rows |
| `SrvcChklstTmplElmntMaxRowsVal` |  | |  | `max_rows` | `INT2(5)` | Maximum number of rows |
| `SrvcChklstTmplElmntIsRequired` |  | |  | `required` | `CHAR(1)` | Required |
| `SrvcChklstTmplElmntIsReadOnly` |  | |  | `readonly` | `CHAR(1)` | Read Only |
| `SrvcChklstTmplElmntTblColIndex` |  | |  | `table_col_index` | `CHAR(10)` | Table Column Index |
| `SrvcChklstTmplElmntDfltValue` |  | |  | `default_value` | `CHAR(1333)` | Default Value |
| `SrvcChklstTmplElementStyle` |  | |  | `style` | `CHAR(100)` | Style |
| `SrvcChklstTmplElementMinValue` |  | |  | `min_value` | `DEC(31)` | Minimum Value |
| `SrvcChklstTmplElementMaxValue` |  | |  | `max_value` | `DEC(31)` | Maximum Value |
| `SrvcChklstTmplElmntRangeValue` |  | |  | `range` | `CHAR(100)` | Range |
| `SrvcChklstTmplElmntExprValue` |  | |  | `expression` | `CHAR(100)` | Expression |
| `SrvcChklstTmplElmntLeftSymbol` |  | |  | `symbol_left` | `CHAR(100)` | Symbol Left |
| `SrvcChklstTmplElmntRightSymbol` |  | |  | `symbol_right` | `CHAR(100)` | Symbol Right |
| `SrvcChklstTmplElmntSignalWord` |  | |  | `signal_word` | `CHAR(100)` | Singal Word |
| `SrvcChklstTmplElmntAttchTypes` |  | |  | `atchmt_alwd_types` | `CHAR(255)` | Attachment Allowed Types |
| `SvCklTmpElmMltplAttchsAreAllwd` |  | |  | `allow_multiple_atch` | `CHAR(1)` | Allow Multiple Attachments |
| `SvCklTmpElmBarcodeIsAllowed` |  | |  | `allow_barcode` | `CHAR(1)` | Allow Barcodes |
| `SvCklTmpElmOutOfRangeIsAllowed` |  | |  | `allow_outofrange_values` | `CHAR(1)` | Allow Out of Range Values |
| `SrvcChklstTmplElmntAttchUUID` |  | |  | `attachment_id` | `RAW(16)` | Attachment Guid |
| `SrvcChklstTmplElmntAttchName` |  | |  | `attachment_name` | `CHAR(1333)` | Attachment Name |
| `SrvcChklstTmplElmntFltrType` |  | |  | `filter` | `CHAR(100)` | Filter |
| `SrvcChklstTmplElmntFltrSubtype` |  | |  | `filtervalue` | `CHAR(100)` | Filter value |
| `SrvcChklstTmplElmntPicIsAllwd` |  | |  | `ispictureallowed` | `CHAR(1)` | Is Picture Allowed |
| `SrvcChklstTmplElmntLinkdPicker` |  | |  | `linkedpicker` | `CHAR(100)` | Linked Picker |
| `SvCklTmpElmLinkdPickerRelation` |  | |  | `linkedpickerrelation` | `CHAR(100)` | Linked Picker Relation |
| `SrvcChklstTmplElmntMaxDecimals` |  | |  | `max_decimals` | `INT1(3)` | Maximum number of decimals |
| `SrvcChklstTmplElmntMinDecimals` |  | |  | `min_decimals` | `INT1(3)` | Minimum number of decimals |
| `SvCklTmpElmMultiLineIsAllowed` |  | |  | `allow_multi_line` | `CHAR(1)` | Allow Multiple Lines |
| `SvCklTmpElmObjPickerObjectType` |  | |  | `obj_pikr_objtype` | `CHAR(100)` | Object Picker Objetc Type |
| `SrvcChklstTmplElmntRangeType` |  | |  | `range_type` | `CHAR(100)` | Range Type |
| `SrvcChklstTmplElmntSelectedIdx` |  | |  | `selected_index` | `CHAR(10)` | Selected Index |
| `SrvcChklstTmplElmntIsSeldOnce` |  | |  | `selected_once` | `CHAR(1)` | Selected Once |
| `SvCklTmpElmVisibilityCndnVal` |  | |  | `visibility_cond` | `CHAR(1333)` | Visibility Condition |
| `SrvcChklstTmplElmntIsInternal` |  | |  | `internal` | `CHAR(1)` | Internal |
| `SvCklTmpElmMnlEntryIsAllowed` |  | |  | `allow_manual_entry` | `CHAR(1)` | Allow Manual Entry |
| `SvCklTmpElmAccuracyIsMet` |  | |  | `is_accuracy_must` | `CHAR(1)` | Is accuracy must |
| `SvCklTmpElmAltdCaptrIsAllowed` |  | |  | `allow_altitude_capture` | `CHAR(1)` | Allow Altitude Capture |
| `SvCklTmpElmMltplLocAreAllowed` |  | |  | `allow_multi_location` | `CHAR(1)` | Allow Multiple Locations |
| `SvCklTmpElmAccuracyValue` |  | |  | `accuracy` | `CHAR(100)` | Accuracy |
| `ServiceChecklistTmplElmntValue` |  | |  | `elm_value` | `CHAR(1333)` | Value |
| `_SrvcChklstTmplElmntText` | | ✓ | | | | |
| `_SrvcChklstTmplElmntType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SrvcChklstTmplElmntText` | `I_SrvcChklstTmplElmntText` | [0..*] |
| `_SrvcChklstTmplElmntType` | `I_SrvcChklstTmplElmntType` | [0..1] |
| `_SrvcChklstTmplElementExtn` | `E_SrvcChklstTmplElement` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCCHKLSTTMPLELEMENT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCCHKLSTTMPLELEMENT')/$value)*

```abap
@EndUserText.label: 'Checklist Template Elements'

@AccessControl.authorizationCheck: #CHECK

@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel:{
    modelingPattern: #NONE,
    supportedCapabilities : [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
    usageType: {
        serviceQuality: #B,
        sizeCategory: #L,
        dataClass: #MASTER
    }
}

@Metadata.ignorePropagatedAnnotations: true

define view entity I_SrvcChklstTmplElement
  as select from crmd_fsm_tm_elm
  association [0..*] to I_SrvcChklstTmplElmntText as _SrvcChklstTmplElmntText   on  $projection.ServiceChecklistTemplate     = _SrvcChklstTmplElmntText.ServiceChecklistTemplate
                                                                                and $projection.SrvcChecklistTemplateElement = _SrvcChklstTmplElmntText.SrvcChecklistTemplateElement
  association [0..1] to I_SrvcChklstTmplElmntType as _SrvcChklstTmplElmntType   on  $projection.SrvcChklstTmplElementType = _SrvcChklstTmplElmntType.SrvcChklstTmplElementType
  association [0..1] to E_SrvcChklstTmplElement   as _SrvcChklstTmplElementExtn on  $projection.ServiceChecklistTemplate     = _SrvcChklstTmplElementExtn.ServiceChecklistTemplate
                                                                                and $projection.SrvcChecklistTemplateElement = _SrvcChklstTmplElementExtn.SrvcChecklistTemplateElement
{
  key template_id             as ServiceChecklistTemplate,
  key element_id              as SrvcChecklistTemplateElement,
      parent_element_id       as SrvcChklstTmplParentElement,
      seqnr                   as SrvcChklstTmplElmntSqncNmbrVal,
      @ObjectModel.foreignKey.association: '_SrvcChklstTmplElmntType'
      type                    as SrvcChklstTmplElementType,
      subtype                 as SrvcChklstTmplElementSubtype,
      fsm_element_id          as SrvcChklstTmplFSMElement,
      min_rows                as SrvcChklstTmplElmntMinRowsVal,
      max_rows                as SrvcChklstTmplElmntMaxRowsVal,
      required                as SrvcChklstTmplElmntIsRequired,
      readonly                as SrvcChklstTmplElmntIsReadOnly,
      table_col_index         as SrvcChklstTmplElmntTblColIndex,
      default_value           as SrvcChklstTmplElmntDfltValue,
      style                   as SrvcChklstTmplElementStyle,
      min_value               as SrvcChklstTmplElementMinValue,
      max_value               as SrvcChklstTmplElementMaxValue,
      range                   as SrvcChklstTmplElmntRangeValue,
      expression              as SrvcChklstTmplElmntExprValue,
      symbol_left             as SrvcChklstTmplElmntLeftSymbol,
      symbol_right            as SrvcChklstTmplElmntRightSymbol,
      signal_word             as SrvcChklstTmplElmntSignalWord,
      atchmt_alwd_types       as SrvcChklstTmplElmntAttchTypes,
      allow_multiple_atch     as SvCklTmpElmMltplAttchsAreAllwd,
      allow_barcode           as SvCklTmpElmBarcodeIsAllowed,
      allow_outofrange_values as SvCklTmpElmOutOfRangeIsAllowed,
      attachment_id           as SrvcChklstTmplElmntAttchUUID,
      attachment_name         as SrvcChklstTmplElmntAttchName,
      filter                  as SrvcChklstTmplElmntFltrType,
      filtervalue             as SrvcChklstTmplElmntFltrSubtype,
      ispictureallowed        as SrvcChklstTmplElmntPicIsAllwd,
      linkedpicker            as SrvcChklstTmplElmntLinkdPicker,
      linkedpickerrelation    as SvCklTmpElmLinkdPickerRelation,
      max_decimals            as SrvcChklstTmplElmntMaxDecimals,
      min_decimals            as SrvcChklstTmplElmntMinDecimals,
      allow_multi_line        as SvCklTmpElmMultiLineIsAllowed,
      obj_pikr_objtype        as SvCklTmpElmObjPickerObjectType,
      range_type              as SrvcChklstTmplElmntRangeType,
      selected_index          as SrvcChklstTmplElmntSelectedIdx,
      selected_once           as SrvcChklstTmplElmntIsSeldOnce,
      visibility_cond         as SvCklTmpElmVisibilityCndnVal,
      internal                as SrvcChklstTmplElmntIsInternal,
      allow_manual_entry      as SvCklTmpElmMnlEntryIsAllowed,
      is_accuracy_must        as SvCklTmpElmAccuracyIsMet,
      allow_altitude_capture  as SvCklTmpElmAltdCaptrIsAllowed,
      allow_multi_location    as SvCklTmpElmMltplLocAreAllowed,
      accuracy                as SvCklTmpElmAccuracyValue,
      elm_value               as ServiceChecklistTmplElmntValue,

      // Association
      _SrvcChklstTmplElmntText,
      _SrvcChklstTmplElmntType

}
```
