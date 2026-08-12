---
name: I_FIXEDVARIABLEINTERESTCAT
description: "Fixedvariableinterestcat"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_FIXEDVARIABLEINTERESTCAT

**Fixedvariableinterestcat**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FixedVariableInterestRateCat` | ✓ | |  | `cast(left(DomainValue.domvalue_l, 1) as ftr_interest_category preserving type)` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_FixedVariableInterestCatT` | [0..*] |

## Source Code

```abap
@AbapCatalog:{ 
    sqlViewName: 'IFIXVARINTCAT',
    buffering.status: #NOT_ALLOWED,
    compiler.compareFilter: true
}
@AbapCatalog.preserveKey: true // only if required by ATC check 
@AccessControl.authorizationCheck:  #NOT_REQUIRED 
@Analytics: {
    dataCategory: #DIMENSION, 
    internalName: #LOCAL
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel: {
    representativeKey: 'FixedVariableInterestRateCat',
    usageType: {
        dataClass:  #MASTER,
        serviceQuality: #B,
        sizeCategory: #S
    },
    supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
    modelingPattern: [ #ANALYTICAL_DIMENSION ]
    
}
@Metadata.allowExtensions:true   
@Metadata.ignorePropagatedAnnotations: true // For C1-Release 
@VDM.viewType: #BASIC
@EndUserText.label: 'Fixed Variable Interest Category'
define view I_FixedVariableInterestCat
  as select from dd07l as DomainValue
  association [0..*] to I_FixedVariableInterestCatT as _Text on $projection.FixedVariableInterestRateCat = _Text.FixedVariableInterestRateCat
{
     @ObjectModel.text.association: '_Text'
  key cast(left(DomainValue.domvalue_l, 1) as ftr_interest_category preserving type) as FixedVariableInterestRateCat,
      _Text
}
where
      DomainValue.domname  = 'FTR_INTEREST_CATEGORY'
  and DomainValue.as4local = 'A'
```
