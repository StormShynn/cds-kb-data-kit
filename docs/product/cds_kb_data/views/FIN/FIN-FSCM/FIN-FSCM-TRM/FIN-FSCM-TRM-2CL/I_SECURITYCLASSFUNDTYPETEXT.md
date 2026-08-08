---
name: I_SECURITYCLASSFUNDTYPETEXT
description: "Securityclassfundtypetext"
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
  - text-view
  - text
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_SECURITYCLASSFUNDTYPETEXT

**Securityclassfundtypetext**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `SecurityClassFundType` | ✓ | |  | `sfoty` |  |  |
| `SecurityClassFundTypeName` |  | |  | `cast(xkurzbez as ftr_gen_seccls_fund_type_sname preserving type )` |  |  |
| `ScrtyClassFundTypeDescription` |  | |  | `cast(xlangbez as ftr_gen_seccls_fund_type_lname preserving type )` |  |  |
| `_SecurityClassFundType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SecurityClassFundType` | `I_SecurityClassFundType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
// harmonized annotations 
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AbapCatalog.compiler.compareFilter: true 
@AbapCatalog.preserveKey: true // only if required by ATC check 
@AbapCatalog.sqlViewName: 'ISCRTYFDTYPTXT'  
@AccessControl.authorizationCheck: #NOT_REQUIRED 
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Security Class Fund Type - Text'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.dataCategory: #TEXT 
@ObjectModel.representativeKey: 'SecurityClassFundType'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.resultSet.sizeCategory:#XS
@Metadata.ignorePropagatedAnnotations: true // For C1-Release 
@VDM.viewType: #BASIC

define view I_SecurityClassFundTypeText
  as select from tw21t
      association [0..1] to I_SecurityClassFundType as _SecurityClassFundType on $projection.SecurityClassFundType = _SecurityClassFundType.SecurityClassFundType
      association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
      key spras                                             as Language,  
      key sfoty                                             as SecurityClassFundType,
      @Semantics.text: true                                       
      cast(xkurzbez as ftr_gen_seccls_fund_type_sname preserving type ) as SecurityClassFundTypeName,
      @Semantics.text: true      
      cast(xlangbez as ftr_gen_seccls_fund_type_lname preserving type ) as ScrtyClassFundTypeDescription,


      _SecurityClassFundType, 
      _Language
}
```
