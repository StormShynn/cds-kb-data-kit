---
name: I_RBLFINANCINGSTATUSTEXT
description: Rblfinancingstatustext
app_component: FI-AR-AR-RF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-AR
  - FI-AR-AR
  - interface-view
  - text-view
  - text
  - status
  - component:FI-AR-AR-RF-2CL
  - lob:Finance
---
# I_RBLFINANCINGSTATUSTEXT

**Rblfinancingstatustext**

| Property | Value |
|---|---|
| App Component | `FI-AR-AR-RF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ReceivableFinancingStatus` | ✓ | |  | `cast( left(dd07t.domvalue_l, 1) as frp_rcvbl_financing_status )` |
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |
| `ReceivableFinancingStatusText` |  | |  | `cast( ddtext as frp_rcvbl_financing_status_txt preserving type )` |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Receivable Financing Status - Text'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'ReceivableFinancingStatus'
@ObjectModel.dataCategory: #TEXT
@ObjectModel: { usageType: { dataClass: #META,
                             serviceQuality: #A,
                             sizeCategory: #S },
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,  
                supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #LANGUAGE_DEPENDENT_TEXT ] }                                                                                                                    
@Search.searchable: true
@VDM.viewType: #BASIC

define view entity I_RblFinancingStatusText
  as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key cast( left(dd07t.domvalue_l, 1) as frp_rcvbl_financing_status ) as ReceivableFinancingStatus,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast( dd07t.ddlanguage as spras preserving type )               as Language,

      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #LOW }
      @Semantics.text: true
      
      cast( ddtext as frp_rcvbl_financing_status_txt preserving type )      as ReceivableFinancingStatusText,
      _Language
}
where
      dd07t.domname  = 'FARP_RBL_FINCG_STATUS'
  and dd07t.as4local = 'A'
```
