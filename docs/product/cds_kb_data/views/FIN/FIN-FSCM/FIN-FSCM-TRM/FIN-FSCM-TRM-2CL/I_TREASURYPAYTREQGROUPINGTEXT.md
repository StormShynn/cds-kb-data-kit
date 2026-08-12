---
name: I_TREASURYPAYTREQGROUPINGTEXT
description: "Treasurypaytreqgroupingtext"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - text-view
  - text
  - treasury
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_TREASURYPAYTREQGROUPINGTEXT

**Treasurypaytreqgroupingtext**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `TreasuryPaymentRequestGrouping` | ✓ | |  | `cast( dd07t.domvalue_l as tb_sprgrd )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `TrsyPaytRequestGroupingName` |  | |  | `cast( dd07t.ddtext as tb_sprgrd_name preserving type )` |  |  |
| `_PaymentRequestGrouping` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PaymentRequestGrouping` | `I_TreasuryPaytReqGrouping` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Treasury Payment Request Grouping - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'ITRSYPAYREQGRPT'
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'TreasuryPaymentRequestGrouping'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view entity I_TreasuryPaytReqGroupingText 
  as select from dd07t
  association [0..1] to I_TreasuryPaytReqGrouping as _PaymentRequestGrouping on $projection.TreasuryPaymentRequestGrouping = _PaymentRequestGrouping.TreasuryPaymentRequestGrouping
  association [0..1] to I_Language                as _Language               on $projection.Language                       = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )      as Language, 
      @ObjectModel.foreignKey.association: '_PaymentRequestGrouping'
      @ObjectModel.text.element: ['TrsyPaytRequestGroupingName']
  key cast( dd07t.domvalue_l as tb_sprgrd )                  as TreasuryPaymentRequestGrouping,
  
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                       as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      cast( dd07t.ddtext as tb_sprgrd_name preserving type ) as TrsyPaytRequestGroupingName,
      
      _PaymentRequestGrouping,
      _Language
} 
where dd07t.domname  = 'T_SPRGRD'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
