---
name: I_JOINTVENTUREDESC
description: "Jointventuredesc"
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
# I_JOINTVENTUREDESC

**Jointventuredesc**

| Property | Value |
|---|---|
| App Component | `CA-JVA` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `cast( bukrs as fis_bukrs preserving type )` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `JointVenture` | ✓ | |  | `vname` |  |  |
| `JointVentureName` |  | |  | `cast ( vtext as jv_venturename preserving type )` |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_JointVentureMasterFld` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_Language` | `I_Language` | [0..1] |
| `_JointVentureMasterFld` | `I_JointVentureMasterFld` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJVTEXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Joint Venture - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType:{
 sizeCategory: #M,
 serviceQuality: #A,
 dataClass: #MASTER }
@ObjectModel.representativeKey: 'JointVenture'
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true
@ObjectModel.modelingPattern: #NONE
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #GENERIC
@AbapCatalog.buffering.numberOfKeyFields: 1
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #UI_PROVIDER_PROJECTION_SOURCE ]

define view I_JointVentureDesc 
  as select from t8jvt
  association [0..1] to I_CompanyCode           as _CompanyCode           on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_Language              as _Language              on  $projection.Language = _Language.Language
  association [1..1] to I_JointVentureMasterFld as _JointVentureMasterFld on  $projection.CompanyCode  = _JointVentureMasterFld.CompanyCode
                                                                          and $projection.JointVenture = _JointVentureMasterFld.JointVenture
{
      @Consumption.valueHelpDefinition: [ 
              { entity:  { name:    'I_JointVentureCompanyCodeVH',
                           element: 'CompanyCode' }
              }]
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key cast( bukrs as fis_bukrs preserving type )       as CompanyCode,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
      @UI.hidden: true
  key spras                                            as Language,
      @ObjectModel.foreignKey.association: '_JointVentureMasterFld'
      @ObjectModel.text.element: ['JointVentureName']
      @Consumption.valueHelpDefinition: [ 
              { entity:  { name:    'I_JntVntrValueHelp',
                           element: 'JointVenture' }
              }]         
  key vname                                            as JointVenture,
      @Semantics.text :true
      @Search : {
      defaultSearchElement: true,
      fuzzinessThreshold: 0.7 }
      cast ( vtext as jv_venturename preserving type ) as JointVentureName,

      _CompanyCode,
      _Language,
      _JointVentureMasterFld
}
```
