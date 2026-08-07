---
name: I_PRJBLGELMENTRCANCLNSRCECODE
description: "Prjblgelmentrcanclnsrcecode"
app_component: PPM-SCL-BIL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-BIL
  - interface-view
  - component:PPM-SCL-BIL
  - lob:Other
---
# I_PRJBLGELMENTRCANCLNSRCECODE

**Prjblgelmentrcanclnsrcecode**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-BIL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PrjBlgElmEntrCanclnSrceCode` | ✓ | |  | `cast( substring( domvalue_l, 1, 1 ) as pbee_cancellingsrc preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_PrjBlgElmEntrCanclnSrcCdText` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Source which cancels PBEE'
@Search.searchable: true
@Analytics.technicalName: 'IPBRBILLGCANCLNSRCTYPE'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@ObjectModel.sapObjectNodeType.name: 'PrjBlgElmEntrCanclnSourceCode'
@ObjectModel.representativeKey: 'PrjBlgElmEntrCanclnSrceCode'
@ObjectModel.usageType: {
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #META
}
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                     #EXTRACTION_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE,
                                     #VALUE_HELP_PROVIDER]
@ObjectModel.dataCategory: #VALUE_HELP
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

@Metadata.ignorePropagatedAnnotations: true

define root view entity I_PrjBlgElmEntrCanclnSrceCode as select from dd07l
  composition[0..*] of I_PrjBlgElmEntrCanclnSrcCdText as _PrjBlgElmEntrCanclnSrcCdText
{

  @ObjectModel.text.association: '_PrjBlgElmEntrCanclnSrcCdText'
  key cast( substring( domvalue_l, 1, 1 ) as pbee_cancellingsrc preserving type ) as PrjBlgElmEntrCanclnSrceCode,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07l.domvalue_l                                                 as DomainValue,

      _PrjBlgElmEntrCanclnSrcCdText

}
where
      domname  = 'PBEE_CANCELLINGSRC'
      and as4local = 'A'
```
