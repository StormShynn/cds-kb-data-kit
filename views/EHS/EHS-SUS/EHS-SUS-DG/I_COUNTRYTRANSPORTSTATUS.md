---
name: I_COUNTRYTRANSPORTSTATUS
description: Countrytransportstatus
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
  - transport
  - country
  - status
  - component:EHS-SUS-DG
  - lob:Other
---
# I_COUNTRYTRANSPORTSTATUS

**Countrytransportstatus**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-DG` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CountryTransportStatus` | `cast( left( dd07l.domvalue_l, 2) as ehdgm_country_transport_status preserving type )` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CountryTransportStatusText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Country/Region Transport Status'
@Analytics: { dataCategory: #DIMENSION }
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'CountryTransportStatus'
// Authorization not required for data elements and domains
@AccessControl.authorizationCheck: #NOT_REQUIRED

@AbapCatalog.sqlViewName: 'ICNTRYTRNSSTAT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true 

// Client handling by session
@ClientHandling.algorithm: #SESSION_VARIABLE

// used for BOBF Master Data Object
@ObjectModel.usageType:{ serviceQuality: #A,        // < 1 msec
                         sizeCategory:  #S,         // < 1.000
                         dataClass: #META }
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET ] 
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@Metadata.ignorePropagatedAnnotations: true                        
                         
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_CountryTransportStatus as select from dd07l
    association [0..*] to I_CountryTransportStatusText as _Text on $projection.CountryTransportStatus = _Text.CountryTransportStatus
{
    @ObjectModel.text.association: '_Text'
    key cast( left( dd07l.domvalue_l, 2) as ehdgm_country_transport_status preserving type ) as CountryTransportStatus,
    _Text
}
where dd07l.domname  = 'EHDGM_COUNTRY_TRANSPORT_STATUS'
  and dd07l.as4local = 'A'
```
