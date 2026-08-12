---
name: I_JNTVNTRVALUEHELP
description: "Jntvntrvaluehelp"
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
  - value-help
  - component:CA-JVA
  - lob:Cross-Application Components
---
# I_JNTVNTRVALUEHELP

**Jntvntrvaluehelp**

| Property | Value |
|---|---|
| App Component | `CA-JVA` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `cast( jv.bukrs as fis_bukrs preserving type )` |  |  |
| `JointVenture` | ✓ | |  | `cast(vname as jv_name_cds preserving type )` |  |  |
| `JointVentureType` |  | |  | `vtype` |  |  |
| `JointVentureClass` |  | |  | `vclass` |  |  |
| `JntOpgAgrmt` |  | |  | `joa` |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_JntOpgAgrmt` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_JntOpgAgrmt` | `I_JntOpgAgrmt` | [1..1] |
| `_Text` | `I_JointVentureDesc` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJVVALUEHELP'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@AccessControl.authorizationCheck: #CHECK
@Metadata.allowExtensions:true
@EndUserText.label: 'Joint Venture'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Search.searchable: true
@VDM.viewType: #BASIC 
@ClientHandling.algorithm: #SESSION_VARIABLE

 @ObjectModel:{
    semanticKey:  [ 'CompanyCode', 'JointVenture'],
    representativeKey: 'JointVenture',
    dataCategory: #VALUE_HELP,
    supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET,#VALUE_HELP_PROVIDER,#ANALYTICAL_DIMENSION,#EXTRACTION_DATA_SOURCE ],
    usageType: {
        serviceQuality: #B,
        sizeCategory: #L,
        dataClass: #MASTER
    }          }
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations:true
@AccessControl.privilegedAssociations:[ '_Text' ]

define view I_JntVntrValueHelp
  as select from t8jv as jv
  association [0..1] to I_CompanyCode      as _CompanyCode on  $projection.CompanyCode = _CompanyCode.CompanyCode

  association [1..1] to I_JntOpgAgrmt      as _JntOpgAgrmt on  $projection.CompanyCode = _JntOpgAgrmt.CompanyCode
                                                           and $projection.JntOpgAgrmt = _JntOpgAgrmt.JntOpgAgrmt

  association [0..*] to I_JointVentureDesc as _Text        on  $projection.CompanyCode  = _Text.CompanyCode
                                                           and $projection.JointVenture = _Text.JointVenture
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
      @Search.defaultSearchElement: true
  key cast( jv.bukrs as fis_bukrs preserving type ) as CompanyCode,
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
  key cast(vname as jv_name_cds preserving type )   as JointVenture,
  
      @Search.defaultSearchElement: true
      jv.vtype                                      as JointVentureType,
      @Search.defaultSearchElement: true
      jv.vclass                                     as JointVentureClass,
      @ObjectModel.foreignKey.association: '_JntOpgAgrmt'
      @Search.defaultSearchElement: true
      jv.joa                                        as JntOpgAgrmt,

      _CompanyCode,
      _JntOpgAgrmt,
      _Text
}
```
