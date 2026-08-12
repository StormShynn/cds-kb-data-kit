---
name: I_BILLGREQITMSETTLMTSTATUSTEXT
description: "Billgreqitmsettlmtstatustext"
app_component: CRM-S4-REP-RFW
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
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_BILLGREQITMSETTLMTSTATUSTEXT

**Billgreqitmsettlmtstatustext**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillgReqItemBillingStatus` | ✓ | |  | `domvalue_l` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `BillgReqItemBillingStatusName` |  | |  | `ddtext` |  |  |
| `_BillgReqItmSettlmtStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillgReqItmSettlmtStatus` | `I_BillgReqItmSettlmtStatus` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBILREQISTLSTATX'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Billing Request Item Settlement Status - Text'

@VDM.viewType: #BASIC

@ClientHandling.algorithm: #SESSION_VARIABLE

/* Enhancement Solution Order */
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true

@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #X
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.representativeKey: 'BillgReqItemBillingStatus'

/* Enhancement Solution Order */
@ObjectModel.modelingPattern:         #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                      #CDS_MODELING_DATA_SOURCE, 
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #EXTRACTION_DATA_SOURCE ] 

@Metadata.ignorePropagatedAnnotations: true

define view I_BillgReqItmSettlmtStatusText
  as select from dd07t
  association [1..1] to I_BillgReqItmSettlmtStatus as _BillgReqItmSettlmtStatus on $projection.BillgReqItemBillingStatus = _BillgReqItmSettlmtStatus.BillgReqItemBillingStatus
  association [0..1] to I_Language                 as _Language                 on _Language.Language = $projection.Language
{
      @ObjectModel.foreignKey.association: '_BillgReqItmSettlmtStatus'
  key domvalue_l as BillgReqItemBillingStatus,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage as Language,
      @Semantics.text: true
      ddtext     as BillgReqItemBillingStatusName,

      _BillgReqItmSettlmtStatus,
      _Language
}
where
      domname  = 'CRM_BILLING_SETTLEMENT_STATUS'
  and as4local = 'A'
```
