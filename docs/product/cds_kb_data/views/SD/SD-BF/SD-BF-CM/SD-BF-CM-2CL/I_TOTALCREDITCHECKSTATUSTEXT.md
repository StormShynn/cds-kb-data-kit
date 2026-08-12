---
name: I_TOTALCREDITCHECKSTATUSTEXT
description: "Totalcreditcheckstatustext"
app_component: SD-BF-CM-2CL
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
  - SD-BF
  - SD-BF-CM
  - interface-view
  - text-view
  - text
  - status
  - credit
  - component:SD-BF-CM-2CL
  - lob:Sales & Distribution
---
# I_TOTALCREDITCHECKSTATUSTEXT

**Totalcreditcheckstatustext**

| Property | Value |
|---|---|
| App Component | `SD-BF-CM-2CL` |
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
| `TotalCreditCheckStatus` | ✓ | |  | `statu` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `TotalCreditCheckStatusDesc` |  | |  | `bezei` |  |  |
| `_TotalCreditCheckStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TotalCreditCheckStatus` | `I_TotalCreditCheckStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ISDTOTCRDTCKSTST'
@EndUserText.label: 'Total Credit Check Status - Text'
@ObjectModel:{
    dataCategory: #TEXT,
    representativeKey: 'TotalCreditCheckStatus',    
    usageType:{
        dataClass: #META ,
        serviceQuality:#A,
        sizeCategory:#S
    }
}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT,
                                      #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY ]
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true

define view I_TotalCreditCheckStatusText
  as select from tvbst

  association [0..1] to I_TotalCreditCheckStatus as _TotalCreditCheckStatus on $projection.TotalCreditCheckStatus = _TotalCreditCheckStatus.TotalCreditCheckStatus
  association [0..1] to I_Language               as _Language               on $projection.Language = _Language.Language
{
      @ObjectModel.sapObjectNodeTypeReference: 'TotalCreditCheckStatus'
      @ObjectModel.foreignKey.association: '_TotalCreditCheckStatus'
  key statu as TotalCreditCheckStatus,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras as Language,

      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.9
      @Search.ranking: #LOW
      bezei as TotalCreditCheckStatusDesc,


      _TotalCreditCheckStatus,
      @Search.defaultSearchElement: false
      _Language
}
where
  (
    tvbst.tbnam = 'VBAK'
  )
  and(
    tvbst.fdnam = 'CMGST'
  );
```
