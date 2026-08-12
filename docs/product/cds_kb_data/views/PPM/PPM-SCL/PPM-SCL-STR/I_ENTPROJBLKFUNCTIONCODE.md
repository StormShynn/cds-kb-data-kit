---
name: I_ENTPROJBLKFUNCTIONCODE
description: "Entprojblkfunctioncode"
app_component: PPM-SCL-STR
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
