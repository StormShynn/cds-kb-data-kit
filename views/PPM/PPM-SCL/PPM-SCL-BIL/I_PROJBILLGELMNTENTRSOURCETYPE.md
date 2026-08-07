---
name: I_PROJBILLGELMNTENTRSOURCETYPE
description: Projbillgelmntentrsourcetype
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
# I_PROJBILLGELMNTENTRSOURCETYPE

**Projbillgelmntentrsourcetype**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-BIL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ProjBillgElmntEntrSourceType` | ✓ | |  | `cast( substring( domvalue_l, 1, 1 ) as pbee_sourceid preserving type )` |
| `DomainValue` |  | |  | `domvalue_l` |
| `_PrjBlgElmEntrSrceTypeText` | | ✓ | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Project billing element entry source type'
@Search.searchable: true
@Analytics.technicalName: 'IPBRBILLGSRCTYPE'
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@Analytics.dataExtraction.enabled: true
@ObjectModel.sapObjectNodeType.name: 'ProjBillgElmntEntrSourceType'
@ObjectModel.representativeKey: 'ProjBillgElmntEntrSourceType'
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
define root view entity I_ProjBillgElmntEntrSourceType as select from dd07l
  composition[0..*] of I_PrjBlgElmEntrSrceTypeText as _PrjBlgElmEntrSrceTypeText
{

  @ObjectModel.text.association: '_PrjBlgElmEntrSrceTypeText'
  key cast( substring( domvalue_l, 1, 1 ) as pbee_sourceid preserving type ) as ProjBillgElmntEntrSourceType,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07l.domvalue_l                                                 as DomainValue,

      _PrjBlgElmEntrSrceTypeText

}
where
      domname  = 'PBEE_SOURCEID'
      and as4local = 'A'
```
