---
name: I_JNTVNTREQUITYTYPEDESC
description: "Jntvntrequitytypedesc"
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
# I_JNTVNTREQUITYTYPEDESC

**Jntvntrequitytypedesc**

| Property | Value |
|---|---|
| App Component | `CA-JVA` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `bukrs` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `JointVentureEquityType` | ✓ | |  | `etype` |  |  |
| `JointVentureEquityTypeName` |  | |  | `etext` |  |  |
| `_Language` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_JntVntrEquityType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_JntVntrEquityType` | `I_JntVntrEquityTypeMaster` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJVEQTYPTXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #BASIC
@ObjectModel:{
  usageType.dataClass: #CUSTOMIZING,
  usageType.sizeCategory: #S,
  usageType.serviceQuality: #A,
  dataCategory: #TEXT }
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Joint Venture Equity Type - Text'
@ObjectModel.representativeKey: 'JointVentureEquityType'

@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT,
                                      #CDS_MODELING_DATA_SOURCE, #UI_PROVIDER_PROJECTION_SOURCE ]

define view I_JntVntrEquityTypeDesc
  as select from t8jet
  association [0..1] to I_Language                as _Language          on  $projection.Language = _Language.Language
  association [1..1] to I_CompanyCode             as _CompanyCode       on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..1] to I_JntVntrEquityTypeMaster as _JntVntrEquityType on  $projection.CompanyCode            = _JntVntrEquityType.CompanyCode
                                                                        and $projection.JointVentureEquityType = _JntVntrEquityType.JointVentureEquityType
{
      @Consumption.valueHelpDefinition: [ 
              { entity:  { name:    'I_JointVentureCompanyCodeVH',
                           element: 'CompanyCode' }
              }]
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key bukrs as CompanyCode,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
      @UI.hidden: true
  key spras as Language,
       @Consumption.valueHelpDefinition: [ 
              { entity:  { name:    'I_JntVntrEquityTypeVH',
                           element: 'JointVentureEquityType' }
              }]
      @ObjectModel.foreignKey.association: '_JntVntrEquityType'
      @ObjectModel.text.element: [ 'JointVentureEquityTypeName' ]
  key etype as JointVentureEquityType,

      @Semantics.text: true
      etext as JointVentureEquityTypeName,

      _CompanyCode,
      _Language,
      _JntVntrEquityType
}
```
