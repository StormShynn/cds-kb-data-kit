---
name: I_OBJVALDETNACTIVATIONSTATUS
description: "Objvaldetnactivationstatus"
app_component: CA-ATP-OVD-2CL
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
  - CA
  - CA-ATP
  - CA-ATP-OVD
  - interface-view
  - status
  - component:CA-ATP-OVD-2CL
  - lob:Cross-Application Components
---
# I_OBJVALDETNACTIVATIONSTATUS

**Objvaldetnactivationstatus**

| Property | Value |
|---|---|
| App Component | `CA-ATP-OVD-2CL` |
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
| `ObjValDetnActivationStatus` | ✓ | |  | `cast ( domvalue_l as ovd_activation_status )` | `CHAR(1)` | Status |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AccessControl:{
  authorizationCheck: #NOT_REQUIRED
}
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Activation Status'
@ObjectModel:{
  dataCategory: #VALUE_HELP,
  representativeKey: 'ObjValDetnActivationStatus',
  resultSet.sizeCategory: #XS,
  sapObjectNodeType.name: 'ObjValDetnActivationStatus',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #SEARCHABLE_ENTITY,
    #SQL_DATA_SOURCE,
    #VALUE_HELP_PROVIDER
  ],
  usageType:{
    dataClass: #META,
    serviceQuality: #A,
    sizeCategory: #S
  }
}
@Search.searchable: true
@VDM:{
  viewType: #BASIC
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_ObjValDetnActivationStatus
  as select from dd07l
  composition [0..*] of I_ObjValDetnActivationStsText as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast ( domvalue_l as ovd_activation_status ) as ObjValDetnActivationStatus,

      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search: {
        defaultSearchElement: true,
        fuzzinessThreshold: 0.8,
        ranking: #HIGH
      }
      domvalue_l                                   as DomainValue,

      /* Associations */
      _Text
}
where
      domname  = 'OVD_ACTIVATION_STATUS'
  and as4local = 'A'
  and as4vers  = '0000'
```
