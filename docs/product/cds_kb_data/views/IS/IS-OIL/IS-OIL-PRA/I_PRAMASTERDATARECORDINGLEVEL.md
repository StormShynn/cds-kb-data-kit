---
name: I_PRAMASTERDATARECORDINGLEVEL
description: "PRA Master Data Recording Level"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAMASTERDATARECORDINGLEVEL')/$value
semantic_en: "PRA Master Data Recording Level"
semantic_vi: "PRA Master Data Recording Level — CDS view giao diện dựa trên dd07l."
keywords:
  - "pra"
  - "master"
  - "data"
  - "recording"
  - "level"
tags:
  - IS
  - bo:businesspartner
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - master-data
---
# I_PRAMASTERDATARECORDINGLEVEL

**PRA Master Data Recording Level**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAMASTERDATARECORDINGLEVEL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MasterDataRecordingLvl` | ✓ | |  | `cast (domvalue_l as /pra/fp_master_level)` | `CHAR(1)` | ONRR-2014 - Master Level |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PRAMasterDataRecordingLevelT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAMASTERDATARECORDINGLEVEL')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAMASTERDATARECORDINGLEVEL')/$value)*

```abap
@EndUserText.label: 'PRA Master Data Recording Level'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVMDRECLVL'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'MasterDataRecordingLvl'

@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
@ObjectModel.sapObjectNodeType.name: 'ONRRMasterDataLevelCode'

define view I_PRAMasterDataRecordingLevel
  as select from dd07l
  association [0..*] to I_PRAMasterDataRecordingLevelT as _Text on $projection.MasterDataRecordingLvl = _Text.MasterDataRecordingLvl
{
      @ObjectModel.text.association: '_Text'
  key cast (domvalue_l as /pra/fp_master_level) as MasterDataRecordingLvl,
      _Text
}
where
      domname  = '/PRA/FP_MASTER_LEVEL'
  and as4local = 'A';
```
