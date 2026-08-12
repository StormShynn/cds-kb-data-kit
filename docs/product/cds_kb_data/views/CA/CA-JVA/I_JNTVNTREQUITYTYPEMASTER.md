---
name: I_JNTVNTREQUITYTYPEMASTER
description: "Jntvntrequitytypemaster"
app_component: CA-JVA
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_JNTVNTREQUITYTYPEMASTER

**Jntvntrequitytypemaster**

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
| `JointVentureEquityType` | ✓ | |  | `etype` |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_JntVntrEquityTypeDesc` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_JntVntrEquityTypeDesc` | `I_JntVntrEquityTypeDesc` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJVET'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Joint Venture Equity Type'
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'JointVentureEquityType'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions: true

@Analytics: {
    dataCategory: #DIMENSION,
        dataExtraction: {
        enabled: true
    }
}
@Analytics.internalName:#LOCAL
@Analytics.settings.valueHelp.supressInitialValue: true

@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION,
                                     #EXTRACTION_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #UI_PROVIDER_PROJECTION_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'JointVentureEquityType'

define view I_JntVntrEquityTypeMaster
  as select from t8je
  association [1..1] to I_CompanyCode           as _CompanyCode           on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..*] to I_JntVntrEquityTypeDesc as _JntVntrEquityTypeDesc on  $projection.CompanyCode            = _JntVntrEquityTypeDesc.CompanyCode
                                                                          and $projection.JointVentureEquityType = _JntVntrEquityTypeDesc.JointVentureEquityType
{       
      @Consumption.valueHelpDefinition: [ 
              { entity:  { name:    'I_JointVentureCompanyCodeVH',
                           element: 'CompanyCode' }
              }]
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key bukrs as CompanyCode,
      @Consumption.valueHelpDefinition: [ 
              { entity:  { name:    'I_JntVntrEquityTypeVH',
                           element: 'JointVentureEquityType' }
              }]
      @ObjectModel.text.association: '_JntVntrEquityTypeDesc'
  key etype as JointVentureEquityType,

      _CompanyCode,
      _JntVntrEquityTypeDesc
}
```
