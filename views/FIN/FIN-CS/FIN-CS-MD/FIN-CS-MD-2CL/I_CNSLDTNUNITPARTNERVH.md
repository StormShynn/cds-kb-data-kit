---
name: I_CNSLDTNUNITPARTNERVH
description: Cnsldtnunitpartnervh
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - value-help
  - partner
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNUNITPARTNERVH

**Cnsldtnunitpartnervh**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ConsolidationUnitPartner` | `_CnsldtnUnitPartner.ConsolidationUnitPartner` |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSCUPARTNERVH',
  compiler.compareFilter: true,
  preserveKey: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
    usageType: {
        dataClass: #CUSTOMIZING,
        serviceQuality: #A,
        sizeCategory: #S
    },
    dataCategory: #VALUE_HELP,
    representativeKey: 'ConsolidationUnitPartner',
    modelingPattern: #VALUE_HELP_PROVIDER,
    supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #SQL_DATA_SOURCE,
                            #VALUE_HELP_PROVIDER ]
}
@Search.searchable: true
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Cons Unit Partner Selection'

define view I_CnsldtnUnitPartnerVH
  as select from I_CnsldtnUnitPartner as _CnsldtnUnitPartner

{

      @ObjectModel.text.element: 'ConsolidationUnitPartnerText'
      @Search:{
        defaultSearchElement: true,
        ranking: #HIGH,
        fuzzinessThreshold: 0.8
      }
  key _CnsldtnUnitPartner.ConsolidationUnitPartner,

      @Semantics.text
      @Search: {
        defaultSearchElement: true,
        ranking: #LOW,
        fuzzinessThreshold: 0.7
      }
      _CnsldtnUnitPartner._Text[1: Language=$session.system_language].ConsolidationUnitPartnerText,

      @Semantics.text
      _CnsldtnUnitPartner._Text[1: Language=$session.system_language].CnsldtnUnitPartnerLongText

}
```
