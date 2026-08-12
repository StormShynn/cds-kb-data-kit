---
name: I_RESVNCOMPLETIONSTATUS
description: "Resvncompletionstatus"
app_component: MM-IM-RS-2CL
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
  - MM-IM
  - MM-IM-RS
  - interface-view
  - status
  - component:MM-IM-RS-2CL
  - lob:Sourcing & Procurement
---
# I_RESVNCOMPLETIONSTATUS

**Resvncompletionstatus**

| Property | Value |
|---|---|
| App Component | `MM-IM-RS-2CL` |
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
| `ReservationCompletionStatus` | ✓ | |  | `cast ( dd07l.domvalue_l as imrs_resvn_compltn_status_code )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_ResvnCompletionStatusText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ResvnCompletionStatusText` | `I_ResvnCompletionStatusText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Completion Status of Reservation'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL,
  technicalName: 'IRESCMPLSTS'
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.compositionRoot: true
@ObjectModel : { 
                 dataCategory: #VALUE_HELP,
                 modelingPattern: #ANALYTICAL_DIMENSION,
                 representativeKey: 'ReservationCompletionStatus',
                 resultSet.sizeCategory: #XS,
                 sapObjectNodeType.name: 'ReservationCompletionStatus',
                 usageType : {
                               serviceQuality: #A,
                               dataClass: #META,
                               sizeCategory: #S
                             }
               }
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE, 
                                     #VALUE_HELP_PROVIDER]
@Search.searchable: true
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #BASIC
}

define view entity I_ResvnCompletionStatus
  as select from dd07l

  -- Text Associations
  /*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ] } */
  association [0..*] to I_ResvnCompletionStatusText as _ResvnCompletionStatusText 
    on $projection.ReservationCompletionStatus = _ResvnCompletionStatusText.ReservationCompletionStatus

{
      @ObjectModel.text.association: '_ResvnCompletionStatusText'
      @UI.hidden: true
  key cast ( dd07l.domvalue_l as imrs_resvn_compltn_status_code ) as ReservationCompletionStatus,

      -- Text Associations
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                            as DomainValue,

      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _ResvnCompletionStatusText

}
where
      dd07l.domname  = 'IMRS_RESVN_COMPLTN_STATUS_CODE'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
