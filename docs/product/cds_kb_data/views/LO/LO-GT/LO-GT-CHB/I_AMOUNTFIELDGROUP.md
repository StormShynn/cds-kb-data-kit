---
name: I_AMOUNTFIELDGROUP
description: "This CDS view exposes fixed values of the amount field group."
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AMOUNTFIELDGROUP')/$value
semantic_en: "This CDS view exposes fixed values of the amount field group."
semantic_vi: "Amount Field Group — CDS view cơ bản dựa trên wb2_c_af_group."
keywords:
  - "amount"
  - "field"
  - "group"
tags:
  - LO
  - bo:companycode
  - component:LO-GT-CHB
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
---
# I_AMOUNTFIELDGROUP

**This CDS view exposes fixed values of the amount field group.**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AMOUNTFIELDGROUP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AmountFieldGroup` | ✓ | |  | `af_group` | `CHAR(4)` | Amount Fields Group |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AMOUNTFIELDGROUP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AMOUNTFIELDGROUP')/$value)*

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
@EndUserText.label: 'Amount Field Group'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #VALUE_HELP,
  representativeKey: 'AmountFieldGroup',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities : [#ANALYTICAL_DIMENSION,
                           #VALUE_HELP_PROVIDER,
                           #SEARCHABLE_ENTITY,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE],
  usageType: {
    dataClass:      #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory:   #S
  } 
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Search.searchable: true
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: false,
  internalName: #LOCAL,
  technicalName: 'AMOUNTFIELDGROUP'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

define root view entity I_AmountFieldGroup
  as select from wb2_c_af_group as AmountFieldGroup

  composition [0..*] of I_AmountFieldGroupText as _Text

{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 1.0
      @Search.ranking: #HIGH
      @UI: {
        textArrangement: #TEXT_FIRST
      }
  key AmountFieldGroup.af_group as AmountFieldGroup,

      /* Associations */
      _Text
}
```
