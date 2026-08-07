---
name: I_SRVCCHKLSTTMPLELEMENT
description: "Checklist Template Elements"
app_component: CRM-S4-INT-FSM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCCHKLSTTMPLELEMENT')/$value
semantic_en: "Checklist Template Elements"
keywords:
  - "Checklist Template All Elements"
tags:
  - CRM
  - component:CRM-S4-INT-FSM-2CL
  - CRM-S4
  - CRM-S4-INT
  - CRM-S4-INT-FSM
  - CRM-S4-INT-FSM-2CL
  - interface-view
  - metadata-only
---
# I_SRVCCHKLSTTMPLELEMENT

**Checklist Template Elements**

| Property | Value |
|---|---|
| App Component | `CRM-S4-INT-FSM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCCHKLSTTMPLELEMENT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceChecklistTemplate` |  | |  |  | `CHAR(10)` | Template ID |
| `SrvcChecklistTemplateElement` |  | |  |  | `NUMC(4)` | Element ID |
| `SrvcChklstTmplParentElement` |  | |  |  | `NUMC(4)` | Parent Element ID |
| `SrvcChklstTmplElmntSqncNmbrVal` |  | |  |  | `INT4(10)` | Sequence Number |
| `SrvcChklstTmplElementType` |  | |  |  | `CHAR(2)` | Element Type |
| `SrvcChklstTmplElementSubtype` |  | |  |  | `CHAR(10)` | Element Subtype |
| `SrvcChklstTmplFSMElement` |  | |  |  | `CHAR(255)` | FSM Element ID |
| `SrvcChklstTmplElmntMinRowsVal` |  | |  |  | `INT2(5)` | Minimum number of rows |
| `SrvcChklstTmplElmntMaxRowsVal` |  | |  |  | `INT2(5)` | Maximum number of rows |
| `SrvcChklstTmplElmntIsRequired` |  | |  |  | `CHAR(1)` | Required |
| `SrvcChklstTmplElmntIsReadOnly` |  | |  |  | `CHAR(1)` | Read Only |
| `SrvcChklstTmplElmntTblColIndex` |  | |  |  | `CHAR(10)` | Table Column Index |
| `SrvcChklstTmplElmntDfltValue` |  | |  |  | `CHAR(1333)` | Default Value |
| `SrvcChklstTmplElementStyle` |  | |  |  | `CHAR(100)` | Style |
| `SrvcChklstTmplElementMinValue` |  | |  |  | `DEC(31)` | Minimum Value |
| `SrvcChklstTmplElementMaxValue` |  | |  |  | `DEC(31)` | Maximum Value |
| `SrvcChklstTmplElmntRangeValue` |  | |  |  | `CHAR(100)` | Range |
| `SrvcChklstTmplElmntExprValue` |  | |  |  | `CHAR(100)` | Expression |
| `SrvcChklstTmplElmntLeftSymbol` |  | |  |  | `CHAR(100)` | Symbol Left |
| `SrvcChklstTmplElmntRightSymbol` |  | |  |  | `CHAR(100)` | Symbol Right |
| `SrvcChklstTmplElmntSignalWord` |  | |  |  | `CHAR(100)` | Singal Word |
| `SrvcChklstTmplElmntAttchTypes` |  | |  |  | `CHAR(255)` | Attachment Allowed Types |
| `SvCklTmpElmMltplAttchsAreAllwd` |  | |  |  | `CHAR(1)` | Allow Multiple Attachments |
| `SvCklTmpElmBarcodeIsAllowed` |  | |  |  | `CHAR(1)` | Allow Barcodes |
| `SvCklTmpElmOutOfRangeIsAllowed` |  | |  |  | `CHAR(1)` | Allow Out of Range Values |
| `SrvcChklstTmplElmntAttchUUID` |  | |  |  | `RAW(16)` | Attachment Guid |
| `SrvcChklstTmplElmntAttchName` |  | |  |  | `CHAR(1333)` | Attachment Name |
| `SrvcChklstTmplElmntFltrType` |  | |  |  | `CHAR(100)` | Filter |
| `SrvcChklstTmplElmntFltrSubtype` |  | |  |  | `CHAR(100)` | Filter value |
| `SrvcChklstTmplElmntPicIsAllwd` |  | |  |  | `CHAR(1)` | Is Picture Allowed |
| `SrvcChklstTmplElmntLinkdPicker` |  | |  |  | `CHAR(100)` | Linked Picker |
| `SvCklTmpElmLinkdPickerRelation` |  | |  |  | `CHAR(100)` | Linked Picker Relation |
| `SrvcChklstTmplElmntMaxDecimals` |  | |  |  | `INT1(3)` | Maximum number of decimals |
| `SrvcChklstTmplElmntMinDecimals` |  | |  |  | `INT1(3)` | Minimum number of decimals |
| `SvCklTmpElmMultiLineIsAllowed` |  | |  |  | `CHAR(1)` | Allow Multiple Lines |
| `SvCklTmpElmObjPickerObjectType` |  | |  |  | `CHAR(100)` | Object Picker Objetc Type |
| `SrvcChklstTmplElmntRangeType` |  | |  |  | `CHAR(100)` | Range Type |
| `SrvcChklstTmplElmntSelectedIdx` |  | |  |  | `CHAR(10)` | Selected Index |
| `SrvcChklstTmplElmntIsSeldOnce` |  | |  |  | `CHAR(1)` | Selected Once |
| `SvCklTmpElmVisibilityCndnVal` |  | |  |  | `CHAR(1333)` | Visibility Condition |
| `SrvcChklstTmplElmntIsInternal` |  | |  |  | `CHAR(1)` | Internal |
| `SvCklTmpElmMnlEntryIsAllowed` |  | |  |  | `CHAR(1)` | Allow Manual Entry |
| `SvCklTmpElmAccuracyIsMet` |  | |  |  | `CHAR(1)` | Is accuracy must |
| `SvCklTmpElmAltdCaptrIsAllowed` |  | |  |  | `CHAR(1)` | Allow Altitude Capture |
| `SvCklTmpElmMltplLocAreAllowed` |  | |  |  | `CHAR(1)` | Allow Multiple Locations |
| `SvCklTmpElmAccuracyValue` |  | |  |  | `CHAR(100)` | Accuracy |
| `ServiceChecklistTmplElmntValue` |  | |  |  | `CHAR(1333)` | Value |
