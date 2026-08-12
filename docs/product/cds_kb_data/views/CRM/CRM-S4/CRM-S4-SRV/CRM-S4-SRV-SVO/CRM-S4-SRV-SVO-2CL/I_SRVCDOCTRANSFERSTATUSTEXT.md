---
name: I_SRVCDOCTRANSFERSTATUSTEXT
description: "Srvcdoctransferstatustext"
app_component: CRM-S4-SRV-SVO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - text-view
  - text
  - status
  - component:CRM-S4-SRV-SVO-2CL
  - lob:Other
---
# I_SRVCDOCTRANSFERSTATUSTEXT

**Srvcdoctransferstatustext**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SVO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SrvcDocTransferStatus` | ✓ | |  | `cast ( domvalue_l as crms4_stat_transfer )` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `SrvcDocTransferStatusText` |  | |  | `ddtext` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_ServiceDocTransferStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocTransferStatus` | `I_SrvcDocTransferStatus` | [1..1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Transfer Status of Serv Transctn - Text'
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel: {
   dataCategory: #TEXT,
   representativeKey: 'SrvcDocTransferStatus',
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #A,
     sizeCategory:   #S
   },
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ],
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT
}
@Analytics.technicalName: 'ISERVTRANSFSTATX'
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

define view entity I_SrvcDocTransferStatusText
  as select from dd07t
  association [1..1] to I_SrvcDocTransferStatus as _ServiceDocTransferStatus on $projection.SrvcDocTransferStatus = _ServiceDocTransferStatus.SrvcDocTransferStatus
  association [1..1] to I_Language              as _Language                 on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_ServiceDocTransferStatus'
  key cast ( domvalue_l as crms4_stat_transfer ) as SrvcDocTransferStatus,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'

  key ddlanguage                                 as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      ddtext                                     as SrvcDocTransferStatusText,

      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                           as DomainValue,

      _ServiceDocTransferStatus,
      _Language
}
where
      domname  = 'CRMS4_STAT_TRANSFER'
  and as4local = 'A'
```
