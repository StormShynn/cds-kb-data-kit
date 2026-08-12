---
name: I_FINTRANSPRODUCTGROUP
description: "Fintransproductgroup"
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
  - product
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_FINTRANSPRODUCTGROUP

**Fintransproductgroup**

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
| `FinTransProductGroup` | ✓ | |  | `cast(left(DomainValue.domvalue_l,4) as ftr_productgroup preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_FinTransProductGroupText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFINTRANSPRODGRP'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Financial Transaction Product Groups'
@VDM.viewType: #BASIC
@Analytics.dataCategory: #DIMENSION 
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]
@ObjectModel:{
    usageType : {
        sizeCategory: #S,
        serviceQuality: #X,
        dataClass: #MIXED
    },
    resultSet.sizeCategory: #XS
}
@ObjectModel.representativeKey: 'FinTransProductGroup'
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.sapObjectNodeType.name: 'FinTransProductGroup'
define view I_FinTransProductGroup 
    as select from dd07l as DomainValue
    association [0..*] to I_FinTransProductGroupText as _Text on $projection.FinTransProductGroup = _Text.FinTransProductGroup
{
      @ObjectModel.text.association: '_Text'  
  key cast(left(DomainValue.domvalue_l,4) as ftr_productgroup preserving type ) as FinTransProductGroup,
  
      _Text   
}
where 
     DomainValue.domname   = 'FTR_PRODUCTGROUP'
 and DomainValue.as4local  = 'A'
 and DomainValue.as4vers   = '0000'
```
