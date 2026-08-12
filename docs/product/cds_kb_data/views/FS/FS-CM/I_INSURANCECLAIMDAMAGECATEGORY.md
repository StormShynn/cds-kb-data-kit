---
name: I_INSURANCECLAIMDAMAGECATEGORY
description: "Insuranceclaimdamagecategory"
app_component: FS-CM
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
  - FS
  - FS-CM
  - interface-view
  - component:FS-CM
  - lob:Other
---
# I_INSURANCECLAIMDAMAGECATEGORY

**Insuranceclaimdamagecategory**

| Property | Value |
|---|---|
| App Component | `FS-CM` |
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
| `InsurClmDamageCategory` | ✓ | |  |  |  |  |
| `InsurClmInsuredObjectCategory` |  | |  |  |  |  |
| `_InsurClmDamageCatT` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Insur Claim Damage Category'
@VDM: {
  viewType:#BASIC,
  lifecycle.contract.type:#PUBLIC_LOCAL_API
}
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL,
  technicalName: 'ICDamageCategory'
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #VALUE_HELP,
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'InsurClmDamageCategory',
  sapObjectNodeType.name: 'InsuranceClaimDamageCategory',
  resultSet.sizeCategory: #XS,
  usageType.serviceQuality: #A,
  usageType.dataClass: #CUSTOMIZING,
  usageType.sizeCategory: #S,
  supportedCapabilities: [#ANALYTICAL_DIMENSION,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #CDS_MODELING_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #SEARCHABLE_ENTITY,
                          #SQL_DATA_SOURCE,
                          #VALUE_HELP_PROVIDER]
}
@Search.searchable: true
@OData.entityType.name: 'InsuranceClaimDamageCategory_Type' 
define root view entity I_InsuranceClaimDamageCategory as select from I_InsurClmDmgdObjCat
composition [0..*] of I_InsurClmDamageCatT as _InsurClmDamageCatT
{
  @Search.defaultSearchElement: true
  @Search.ranking: #HIGH
  key InsurClmDamageCategory,
  InsurClmInsuredObjectCategory,
  
  //Associations
  _InsurClmDamageCatT
}
```
