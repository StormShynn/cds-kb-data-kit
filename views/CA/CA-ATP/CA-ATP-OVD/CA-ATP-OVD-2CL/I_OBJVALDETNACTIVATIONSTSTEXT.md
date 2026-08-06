---
name: I_OBJVALDETNACTIVATIONSTSTEXT
description: Objvaldetnactivationststext
app_component: CA-ATP-OVD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-ATP
  - CA-ATP-OVD
  - interface-view
  - text-view
  - text
  - component:CA-ATP-OVD-2CL
  - lob:Cross-Application Components
---
# I_OBJVALDETNACTIVATIONSTSTEXT

**Objvaldetnactivationststext**

| Property | Value |
|---|---|
| App Component | `CA-ATP-OVD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `cast(ddlanguage as spras preserving type )` |
| key `ObjValDetnActivationStatus` | `cast ( domvalue_l as ovd_activation_status )` |
| `DomainValue` | `domvalue_l` |
| `ObjValDetnActivationStatusDesc` | `ddtext` |
| `_Language` | *Association* |
| `_Status` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@Analytics: {
  dataExtraction.enabled: true,
  internalName: #LOCAL,
  technicalName: 'IOVDACTVTNSTST'
}
@EndUserText.label: 'Activation Status - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'ObjValDetnActivationStatus',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #LANGUAGE_DEPENDENT_TEXT,
    #SEARCHABLE_ENTITY,
    #SQL_DATA_SOURCE
  ],
  usageType: {
    dataClass: #META,
    serviceQuality: #A,
    sizeCategory: #S
  }
}
@Search.searchable: true
@VDM: {
  viewType: #BASIC
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_ObjValDetnActivationStsText
  as select from dd07t
  association        to parent I_ObjValDetnActivationStatus as _Status   on $projection.ObjValDetnActivationStatus = _Status.ObjValDetnActivationStatus
  association [0..1] to I_Language                          as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(ddlanguage  as spras preserving type )  as Language,

      @ObjectModel.foreignKey.association: '_Status'
      @ObjectModel.text.element: ['ObjValDetnActivationStatusDesc']
  key cast ( domvalue_l as ovd_activation_status ) as ObjValDetnActivationStatus,

      @Analytics.hidden: true
      @Consumption.hidden: true
      domvalue_l                                   as DomainValue,

      @Search: {
        defaultSearchElement: true,
        fuzzinessThreshold: 0.8,
        ranking: #LOW
      }
      @Semantics.text: true
      ddtext                                       as ObjValDetnActivationStatusDesc,

      /* Associations */
      _Language,
      _Status
}
where
      domname  = 'OVD_ACTIVATION_STATUS'
  and as4local = 'A'
  and as4vers  = '0000'
```
