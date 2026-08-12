---
name: I_PURCHASINGORGANIZATION
description: "Purchasingorganization"
app_component: MM
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
  - MM
  - interface-view
  - component:MM
  - lob:Sourcing & Procurement
  - bo:PurchasingOrganization
---
# I_PURCHASINGORGANIZATION

**Purchasingorganization**

| Property | Value |
|---|---|
| App Component | `MM` |
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
| `PurchasingOrganization` | ✓ | |  | `cast( ekorg as ekorg_ll preserving type )` |  |  |
| `PurchasingOrganizationName` |  | |  | `cast( ekotx as mm_a_purg_org_name preserving type )` |  |  |
| `CompanyCode` |  | |  | `bukrs` |  |  |
| `ConfigDeprecationCode` |  | |  | `configdeprecationcode` |  |  |
| `_Plant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_PlantPurchasingOrganization` | [0..*] |

## Source Code

```abap
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'PurchasingOrganization'
@ObjectModel.usageType.dataClass:#ORGANIZATIONAL
@ObjectModel.usageType.serviceQuality:#A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.sapObjectNodeType.name:'PurchasingOrganization'
@ObjectModel.supportedCapabilities: [ #SEARCHABLE_ENTITY,
                                      #ANALYTICAL_DIMENSION,
                                      #EXTRACTION_DATA_SOURCE,
                                      #SQL_DATA_SOURCE, 
                                      #CDS_MODELING_DATA_SOURCE, 
                                      #CDS_MODELING_ASSOCIATION_TARGET ]
@AbapCatalog.sqlViewName: 'IMMPURGORG'
@EndUserText.label: 'Purchasing Organization'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
define view I_PurchasingOrganization
  as select from t024e

  association [0..*] to I_PlantPurchasingOrganization as _Plant on $projection.PurchasingOrganization = _Plant.PurchasingOrganization

{
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.75
      @ObjectModel.text.element : 'PurchasingOrganizationName'
  key cast( ekorg as ekorg_ll preserving type )           as PurchasingOrganization,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.75
      @Semantics.text: true
      cast( ekotx as mm_a_purg_org_name preserving type ) as PurchasingOrganizationName,

      t024e.bukrs                                         as CompanyCode,
      
      t024e.configdeprecationcode                         as ConfigDeprecationCode,

      _Plant
};
```
