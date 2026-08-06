---
name: I_COUNTRYTRANSPORTSTATUSTEXT
description: Countrytransportstatustext
app_component: EHS-SUS-DG
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - EHS
  - EHS-SUS
  - EHS-SUS-DG
  - interface-view
  - text-view
  - transport
  - country
  - text
  - status
  - component:EHS-SUS-DG
  - lob:Other
---
# I_COUNTRYTRANSPORTSTATUSTEXT

**Countrytransportstatustext**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-DG` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CountryTransportStatus` | `cast( left(dd07t.domvalue_l, 2) as ehdgm_country_transport_status preserving type )` |
| key `Language` | `dd07t.ddlanguage` |
| `CountryTransportStatusName` | `dd07t.ddtext` |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Country/Region Transport Status - Text'
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'CountryTransportStatus'
@AccessControl.authorizationCheck: #NOT_REQUIRED

@AbapCatalog.sqlViewName: 'ICNTRYTRNSSTATT'
@AbapCatalog.compiler.compareFilter: true

// Client handling by session
@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true
// used for BOBF Master Data Object
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT]
@ObjectModel.usageType:{ serviceQuality: #A,        // < 15 msec
                         sizeCategory:  #S,         // < 1.000
                         dataClass: #META }

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_CountryTransportStatusText as select from dd07t
    association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    key cast( left(dd07t.domvalue_l, 2) as ehdgm_country_transport_status preserving type ) as CountryTransportStatus,
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key dd07t.ddlanguage as Language,
    @Semantics.text:true
    dd07t.ddtext as CountryTransportStatusName,
        
    _Language
}
where dd07t.domname  = 'EHDGM_COUNTRY_TRANSPORT_STATUS'
  and dd07t.as4local = 'A'
```
