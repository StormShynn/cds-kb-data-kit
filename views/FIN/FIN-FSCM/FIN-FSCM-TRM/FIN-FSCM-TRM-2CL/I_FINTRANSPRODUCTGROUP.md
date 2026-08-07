---
name: I_FINTRANSPRODUCTGROUP
description: Fintransproductgroup
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
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
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `FinTransProductGroup` | ✓ | |  | `cast(left(DomainValue.domvalue_l,4) as ftr_productgroup preserving type )` |
| `_Text` | | ✓ | | |

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
