---
name: I_TIMEZONEIANACODEMAP
description: "Timezoneianacodemap"
app_component: BC-SRV-TIM-TZ
software_component: SAP_BASIS
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
  - BC
  - BC-SRV
  - BC-SRV-TIM
  - interface-view
  - component:BC-SRV-TIM-TZ
  - lob:Basis Components
---
# I_TIMEZONEIANACODEMAP

**Timezoneianacodemap**

| Property | Value |
|---|---|
| App Component | `BC-SRV-TIM-TZ` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TimeZoneIANACode` | ✓ | |  | `ianatzone` | `CHAR(64)` | IANA time zone |
| `TimeZoneID` |  | |  | `tzone` | `CHAR(6)` | Time Zone |
| `IANACodeIsCustDefinedDefault` |  | |  | `flagdefault` | `CHAR(1)` | Default IANA time zone for SAP time zone |
| `IANACodeIsSAPDefinedDefault` |  | |  | `flagsapdefault` | `CHAR(1)` | SAP standard default IANA time zone for SAP time zone |
| `_TimeZone` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TimeZone` | `I_TimeZone` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Time Zone Code According to IANA Time Zone Database'
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}  
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true
}
@ObjectModel: {
  sapObjectNodeType.name: 'TimeZoneIANACode',
  representativeKey:      'TimeZoneIANACode',
  usageType: {
    dataClass:      #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory:   #S
  },
  supportedCapabilities:  [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, 
                            #SQL_DATA_SOURCE, #ANALYTICAL_DIMENSION ],
  modelingPattern: #ANALYTICAL_DIMENSION
}
@Metadata.ignorePropagatedAnnotations: true

define view entity I_TimeZoneIANACodeMap
  as select from tzonemap

  association [0..1] to I_TimeZone as _TimeZone on $projection.TimeZoneID = _TimeZone.TimeZoneID

{
      @Semantics.timeZone: true 
  key ianatzone      as TimeZoneIANACode,
      @ObjectModel.foreignKey.association: '_TimeZone'
      tzone          as TimeZoneID,
                        _TimeZone,
      @Semantics.booleanIndicator: true
      flagdefault    as IANACodeIsCustDefinedDefault,
      @Semantics.booleanIndicator: true
      flagsapdefault as IANACodeIsSAPDefinedDefault
}
```
