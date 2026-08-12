---
name: I_ENTPROJBLKFUNCTIONCODE
description: "Entprojblkfunctioncode"
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-STR
  - interface-view
  - component:PPM-SCL-STR
  - lob:Other
---
# I_ENTPROJBLKFUNCTIONCODE

**Entprojblkfunctioncode**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EnterpriseProjectBlockFunction` | ✓ | |  | `cast( dd07l.domvalue_l as entobj_function_id )` |  |  |
| `DomainValueLow` |  | |  | `domvalue_l` |  |  |
| `_EntProjBlkFunctionCodeText` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel:{ representativeKey: 'EnterpriseProjectBlockFunction', 
               usageType.dataClass: #CUSTOMIZING,
               usageType.serviceQuality: #A,
               usageType.sizeCategory: #S,
               resultSet.sizeCategory: #XS,
               sapObjectNodeType.name: 'EnterpriseProjectBlockFunction',
               dataCategory: #VALUE_HELP,
               supportedCapabilities: [#SQL_DATA_SOURCE, #ANALYTICAL_DIMENSION, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET,  #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER ]
                }
@Metadata.ignorePropagatedAnnotations:true
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@Search.searchable: true
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API


@EndUserText.label: 'Blockable Function for Enterprise Projects'
define root view entity I_EntProjBlkFunctionCode as select from dd07l
composition [0..*] of I_EntProjBlkFunctionCodeText as _EntProjBlkFunctionCodeText
{
  @ObjectModel.text.association: '_EntProjBlkFunctionCodeText'
  key cast( dd07l.domvalue_l as entobj_function_id ) as EnterpriseProjectBlockFunction,
  @Analytics.hidden: true
  @Consumption.hidden: true
  @Search.defaultSearchElement: true
  @Search.ranking: #HIGH
  dd07l.domvalue_l as DomainValueLow,
  _EntProjBlkFunctionCodeText 
}
where dd07l.domname = 'FCO_ACAS_BTTYPE_GROUP'
```
