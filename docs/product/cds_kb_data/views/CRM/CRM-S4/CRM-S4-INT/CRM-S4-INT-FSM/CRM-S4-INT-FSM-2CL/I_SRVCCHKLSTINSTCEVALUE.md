---
name: I_SRVCCHKLSTINSTCEVALUE
description: "Checklist Instance Values"
app_component: CRM-S4-INT-FSM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCCHKLSTINSTCEVALUE')/$value
semantic_en: "Checklist Instance Values"
semantic_vi: "Checklist Instance Values — CDS view cơ bản dựa trên crmd_fsm_in_elm."
keywords:
  - "Checklist Instance Value"
  - "checklist"
  - "instance"
  - "values"
  - "service"
  - "srvc"
  - "template"
  - "element"
  - "chklst"
  - "instce"
  - "elmnt"
  - "occren"
  - "value"
  - "type"
  - "series"
tags:
  - CRM
  - component:CRM-S4-INT-FSM-2CL
  - CRM-S4
  - CRM-S4-INT
  - CRM-S4-INT-FSM
  - CRM-S4-INT-FSM-2CL
  - interface-view
---
# I_SRVCCHKLSTINSTCEVALUE

**Checklist Instance Values**

| Property | Value |
|---|---|
| App Component | `CRM-S4-INT-FSM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCCHKLSTINSTCEVALUE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceChecklistInstance` | ✓ | |  | `instance_id` | `CHAR(10)` | Instance ID |
| `SrvcChecklistTemplateElement` | ✓ | |  | `element_id` | `NUMC(4)` | Element ID |
| `SrvcChklstInstceElmntOccren` | ✓ | |  | `elm_occurence` | `INT4(10)` | Sequence Number |
| `SrvcChklstInstceElmntValueType` |  | |  | `value_type` | `CHAR(30)` | Value Type |
| `SrvcChklstInstceElmntSeriesIdx` |  | |  | `series_index` | `CHAR(10)` | Series Index |
| `SrvcChklstInstceElmntTblRowIdx` |  | |  | `table_row` | `CHAR(10)` | Table Row |
| `SrvcChklstInstceStateElmntIdx` |  | |  | `state_elm_index` | `CHAR(10)` | State Element Index |
| `SrvcChklstInstceAttchPickerIdx` |  | |  | `atchmnt_pkr_index` | `CHAR(10)` | Attachment Picker Index |
| `NrOfSvCklInstceStateElements` |  | |  | `state_elm_quan` | `CHAR(1333)` | State Element Quantity |
| `SrvcChklstInstceElementValue` |  | |  | `elm_value` | `CHAR(1333)` | Element Value |
| `SrvcChklstInstceElmntDesc` |  | |  | `elm_description` | `CHAR(1333)` | Element Description |
| `SrvcChklstInstceElmntComment` |  | |  | `elm_comment` | `CHAR(1333)` | Element Comment |
| `SrvcChklstInstceElmntImage` |  | |  | `elm_image` | `CHAR(1333)` | Element Image |
| `SrvcChklstInstceElmntItem` |  | |  | `elm_item` | `CHAR(1333)` | Element Item |
| `SrvcChklstLanguage` |  | |  | `language` | `LANG(1)` | Language |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SrvcChklstInstceValueExtn` | `E_SrvcChklstInstceValue` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCCHKLSTINSTCEVALUE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCCHKLSTINSTCEVALUE')/$value)*

```abap
@EndUserText.label: 'Checklist Instance Values'
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
        dataClass: #TRANSACTIONAL
    }
}
@Metadata.ignorePropagatedAnnotations: true

define view entity I_SrvcChklstInstceValue
  as select from crmd_fsm_in_elm
  association [0..1] to E_SrvcChklstInstceValue  as _SrvcChklstInstceValueExtn on  $projection.ServiceChecklistInstance     = _SrvcChklstInstceValueExtn.ServiceChecklistInstance
                                                                               and $projection.SrvcChecklistTemplateElement = _SrvcChklstInstceValueExtn.SrvcChecklistTemplateElement
                                                                               and $projection.SrvcChklstInstceElmntOccren  = _SrvcChklstInstceValueExtn.SrvcChklstInstceElmntOccren
{
  key instance_id       as ServiceChecklistInstance,
  key element_id        as SrvcChecklistTemplateElement,
  key elm_occurence     as SrvcChklstInstceElmntOccren,
      value_type        as SrvcChklstInstceElmntValueType,
      series_index      as SrvcChklstInstceElmntSeriesIdx,
      table_row         as SrvcChklstInstceElmntTblRowIdx,
      state_elm_index   as SrvcChklstInstceStateElmntIdx,
      atchmnt_pkr_index as SrvcChklstInstceAttchPickerIdx,
      state_elm_quan    as NrOfSvCklInstceStateElements,
      elm_value         as SrvcChklstInstceElementValue,
      elm_description   as SrvcChklstInstceElmntDesc,
      elm_comment       as SrvcChklstInstceElmntComment,
      elm_image         as SrvcChklstInstceElmntImage,
      elm_item          as SrvcChklstInstceElmntItem,
      language          as SrvcChklstLanguage

}
```
