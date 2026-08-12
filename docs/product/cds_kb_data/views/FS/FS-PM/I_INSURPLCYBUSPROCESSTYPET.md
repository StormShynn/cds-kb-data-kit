---
name: I_INSURPLCYBUSPROCESSTYPET
description: "Bus Process Type in Insur Plcy - Text"
app_component: FS-PM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPLCYBUSPROCESSTYPET')/$value
semantic_en: "Bus Process Type in Insur Plcy - Text"
semantic_vi: "Bus Process Type in Insur Plcy - Text — CDS view cơ bản dựa trên Bus Process Type in Insur Plcy - Text."
keywords:
  - "bus"
  - "process"
  - "type"
  - "insur"
  - "plcy"
  - "text"
  - "language"
  - "proc"
  - "name"
tags:
  - FS
  - component:FS-PM
  - FS-PM
  - interface-view
---
# I_INSURPLCYBUSPROCESSTYPET

**Bus Process Type in Insur Plcy - Text**

| Property | Value |
|---|---|
| App Component | `FS-PM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPLCYBUSPROCESSTYPET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `InsurPlcyBusProcType` | ✓ | |  | `bizprc_id` | `CHAR(5)` | Business Process |
| `InsurPlcyBusProcTypeName` |  | |  | `bizprc_tt` | `CHAR(50)` | Business Process Description |
| `_Language` | | ✓ | | | | |
| `_InsurPlcyBusProcessType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPLCYBUSPROCESSTYPET')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPLCYBUSPROCESSTYPET')/$value)*

```abap
@EndUserText.label: 'Bus Process Type in Insur Plcy - Text'
@ObjectModel:{
    representativeKey: 'InsurPlcyBusProcType',
    dataCategory: #TEXT,
    usageType: {
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #CUSTOMIZING
    },
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
    supportedCapabilities: [
                            #LANGUAGE_DEPENDENT_TEXT,
                            #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #SQL_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE,
                            #SEARCHABLE_ENTITY 
                           ]
}
@VDM: {
  viewType:#BASIC,
  lifecycle.contract.type:#PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck:#NOT_REQUIRED
@Search.searchable: true
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true

define view entity I_InsurPlcyBusProcessTypeT
  as select from /pm0/abuubizprot
  association        to parent I_InsurPlcyBusProcessType as _InsurPlcyBusProcessType on $projection.InsurPlcyBusProcType = _InsurPlcyBusProcessType.InsurPlcyBusProcType
  association [0..1] to I_Language                       as _Language                on $projection.Language = _Language.Language

{

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key langu     as Language,
      @ObjectModel.foreignKey.association: '_InsurPlcyBusProcessType'
      @ObjectModel.text.element: ['InsurPlcyBusProcTypeName']
  key bizprc_id as InsurPlcyBusProcType,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      bizprc_tt as InsurPlcyBusProcTypeName,

      //Associations
      _InsurPlcyBusProcessType,
      _Language

}
```
