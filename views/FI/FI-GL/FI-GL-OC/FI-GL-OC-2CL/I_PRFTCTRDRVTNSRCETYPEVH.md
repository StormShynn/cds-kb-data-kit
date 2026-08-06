---
name: I_PRFTCTRDRVTNSRCETYPEVH
description: Prftctrdrvtnsrcetypevh
app_component: FI-GL-OC-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-OC
  - interface-view
  - value-help
  - component:FI-GL-OC-2CL
  - lob:Finance
---
# I_PRFTCTRDRVTNSRCETYPEVH

**Prftctrdrvtnsrcetypevh**

| Property | Value |
|---|---|
| App Component | `FI-GL-OC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ProfitCenterDerivationSrceType` | `ProfitCenterDerivationSrceType` |
| key `ProfitCenterDrvtnSrceTypeName` | `case when _Text[1:Language=$session.system_language].ProfitCenterDrvtnSrceTypeName is null then _Text[1:Language='E'].ProfitCenterDrvtnSrceTypeName else _Text[1:Language=$session.system_language].ProfitCenterDrvtnSrceTypeName end` |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFINOCRGLTWBSDST'
@EndUserText.label: 'ProfitCtrDerivationSrceType'
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #COMPOSITE
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'ProfitCenterDerivationSrceType'
@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #B,
  sizeCategory: #S
}
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY]
@ObjectModel.resultSet.sizeCategory:      #XS

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
//@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.preserveKey:true
@Consumption.ranked: true

define view I_PrftCtrDrvtnSrceTypeVH
  as select from I_ProfitCtrDerivationSrceType
{
       @UI.textArrangement: #TEXT_ONLY
       @ObjectModel.text.element:    ['ProfitCenterDrvtnSrceTypeName']

  key  ProfitCenterDerivationSrceType,
       @Semantics.text:true
       //      @Search.defaultSearchElement: true
       //      @Search.fuzzinessThreshold: 0.8
       //      @Search.ranking: #HIGH
  key  case when _Text[1:Language=$session.system_language].ProfitCenterDrvtnSrceTypeName is null
          then  _Text[1:Language='E'].ProfitCenterDrvtnSrceTypeName
          else  _Text[1:Language=$session.system_language].ProfitCenterDrvtnSrceTypeName
   end as ProfitCenterDrvtnSrceTypeName
}
```
