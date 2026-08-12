---
name: I_HDRGENINCOMPLETIONSTATUS
description: "Hdrgenincompletionstatus"
app_component: SD-SLS-GF-2CL
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
  - SD
  - SD-SLS
  - SD-SLS-GF
  - interface-view
  - status
  - header-level
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
---
# I_HDRGENINCOMPLETIONSTATUS

**Hdrgenincompletionstatus**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
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
| `HdrGeneralIncompletionStatus` | ✓ | |  | `cast( substring (dd07l.domvalue_l, 1, 1) as hdr_general_incompltn_status preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_HdrGenIncompletionStatusT` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC

@AccessControl.authorizationCheck:  #NOT_REQUIRED

@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }

@ObjectModel: {
  dataCategory: #VALUE_HELP,
  representativeKey: 'HdrGeneralIncompletionStatus',
  usageType: {
    dataClass: #META,
    serviceQuality: #A,
    sizeCategory: #S
  }, 
  resultSet.sizeCategory: #XS,
  supportedCapabilities: [ #ANALYTICAL_DIMENSION, 
                           #EXTRACTION_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET, 
                           #SQL_DATA_SOURCE, 
                           #CDS_MODELING_DATA_SOURCE,
                           #VALUE_HELP_PROVIDER, 
                           #SEARCHABLE_ENTITY ],
  modelingPattern: #ANALYTICAL_DIMENSION
}

@AbapCatalog: {
  sqlViewName: 'ISDHDGENINCLSTS',
  preserveKey: true
}

@ObjectModel.sapObjectNodeType.name: 'SlsDocGenIncompletionStatus'
@Search.searchable: true

@Consumption.ranked: true

@Metadata.ignorePropagatedAnnotations:true

@EndUserText.label: 'Header General Incompletion Status'
define view I_HdrGenIncompletionStatus
as select from dd07l 

association [0..*] to I_HdrGenIncompletionStatusT as _Text on $projection.HdrGeneralIncompletionStatus = _Text.HdrGeneralIncompletionStatus
{
    @ObjectModel.text.association: '_Text'
    key cast( substring (dd07l.domvalue_l, 1, 1) as hdr_general_incompltn_status preserving type ) as HdrGeneralIncompletionStatus,
    
    @Analytics.hidden: true
    @Consumption.hidden: true
    @Search.defaultSearchElement: true
    @Search.ranking: #HIGH
    domvalue_l as DomainValue,
    
    _Text  
}
where (dd07l.domname = 'STATV') and (dd07l.as4local = 'A')
  and ((dd07l.domvalue_l = 'A') or (dd07l.domvalue_l = 'C'));
```
