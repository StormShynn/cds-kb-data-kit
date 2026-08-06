---
name: I_JNTVNTRPENALTYCATEGORY
description: Jntvntrpenaltycategory
app_component: CA-JVA
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-JVA
  - interface-view
  - component:CA-JVA
  - lob:Cross-Application Components
---
# I_JNTVNTRPENALTYCATEGORY

**Jntvntrpenaltycategory**

| Property | Value |
|---|---|
| App Component | `CA-JVA` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CompanyCode` | `bukrs` |
| key `JntVntrPenaltyCategory` | `pencat` |
| `_CompanyCode` | *Association* |
| `_JntVntrPenaltyCategoryText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_JntVntrPenaltyCategoryText` | `I_JntVntrPenaltyCategoryText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJVPNLTYCAT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@ObjectModel:{
   representativeKey: 'JntVntrPenaltyCategory',
   usageType: {
       serviceQuality: #A,
       sizeCategory: #S,
       dataClass: #CUSTOMIZING
 }            }
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName:#LOCAL
@Metadata.allowExtensions:true
@EndUserText.label: 'Penalty Category in JVA'

@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION, 
                                      #CDS_MODELING_DATA_SOURCE, #UI_PROVIDER_PROJECTION_SOURCE ]

define view I_JntVntrPenaltyCategory
  as select from t8jl
  association [0..1] to I_CompanyCode                as _CompanyCode                on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..*] to I_JntVntrPenaltyCategoryText as _JntVntrPenaltyCategoryText on  $projection.CompanyCode            = _JntVntrPenaltyCategoryText.CompanyCode
                                                                                    and $projection.JntVntrPenaltyCategory = _JntVntrPenaltyCategoryText.JntVntrPenaltyCategory
{     
     @Consumption.valueHelpDefinition: [ 
              { entity:  { name:    'I_JointVentureCompanyCodeVH',
                           element: 'CompanyCode' }
              }]
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key bukrs  as CompanyCode,
      @ObjectModel.text.association: '_JntVntrPenaltyCategoryText'
  key pencat as JntVntrPenaltyCategory,

      _CompanyCode,
      _JntVntrPenaltyCategoryText
}
```
