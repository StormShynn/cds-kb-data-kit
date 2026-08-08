---
name: I_CREDITBLOCKREASONTEXT
description: "Creditblockreasontext"
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-CR
  - interface-view
  - text-view
  - text
  - credit
  - component:FIN-FSCM-CR-2CL
  - lob:Other
---
# I_CREDITBLOCKREASONTEXT

**Creditblockreasontext**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CreditAccountBlockReason` | ✓ | |  | `block_reason` |  |  |
| `Language` | ✓ | |  | `langu` |  |  |
| `CrdtAcctBlockReasonDescription` |  | |  | `block_reason_txt` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'CreditManagement Block Reason - Text'
@Analytics: { dataExtraction.enabled: true }
@AbapCatalog.sqlViewName: 'ICRDBLCKREASNTXT'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@VDM.viewType: #BASIC
//@VDM.private: false
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'CreditAccountBlockReason'
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                                     #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]
@Search: { searchable: true }
define view I_CreditBlockReasonText
  as select from ukm_bl_reason0t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key block_reason     as CreditAccountBlockReason,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key langu            as Language,
      @Semantics.text : true
      @Search: { defaultSearchElement: true,
                 fuzzinessThreshold:   0.8,
                 ranking:              #LOW }
      block_reason_txt as CrdtAcctBlockReasonDescription,
      _Language
};
```
