---
name: I_RECASHFLOWORIGIN
description: "Recashfloworigin"
app_component: RE-FX-CN-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - RE-FX-CN
  - interface-view
  - component:RE-FX-CN-2CL
  - lob:Other
---
# I_RECASHFLOWORIGIN

**Recashfloworigin**

| Property | Value |
|---|---|
| App Component | `RE-FX-CN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RECashFlowOrigin` | ✓ | |  | `cast( dd07l.domvalue_l as reiscforigin )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IREFLWORGN'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName:#LOCAL
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Cash Flow Origin'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'RECashFlowOrigin'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.viewType: #BASIC
@ObjectModel.modelingPattern:           #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:  [  #ANALYTICAL_DIMENSION,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #VALUE_HELP_PROVIDER,
                                        #SEARCHABLE_ENTITY,
                                        #EXTRACTION_DATA_SOURCE ]
define root view I_RECashFlowOrigin
  as select from dd07l
 composition [0..*] of I_RECashFlowOriginText as _Text
{
    @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as reiscforigin ) as RECashFlowOrigin,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                          as DomainValue,

      _Text
}
where
      dd07l.domname  = 'REISCFORIGIN'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
