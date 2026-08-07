---
name: I_WRNTYCLAIMDECISIONCODE
description: Wrntyclaimdecisioncode
app_component: LO-WTY-FIO
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-WTY
  - interface-view
  - component:LO-WTY-FIO
  - lob:Logistics General
---
# I_WRNTYCLAIMDECISIONCODE

**Wrntyclaimdecisioncode**

| Property | Value |
|---|---|
| App Component | `LO-WTY-FIO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WarrantyClaimItemDecisionCode` | ✓ | |  | `rejcd` |  |  |
| `WrntyClaimDecisionCodeCategory` |  | |  | `dcsncode_cat` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_WrntyClaimDecisionCodeText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Warranty Decision Code'
@ObjectModel:{
    representativeKey: 'WarrantyClaimItemDecisionCode',
    usageType:{
        dataClass       : #ORGANIZATIONAL,
        serviceQuality  : #A,
        sizeCategory    : #S
        },
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]        
}
@ObjectModel.sapObjectNodeType.name : 'WarrantyClaim'
@VDM.viewType: #BASIC //*******Modernization Task********
//@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Feature: 'LO_WTY_CLAIM_MANAGEMENT'
@Analytics:{ dataCategory: #DIMENSION,
             dataExtraction.enabled: true,
             internalName:#LOCAL }
@Analytics.technicalName: 'IWRNTYCLMDCODE'
@Metadata.ignorePropagatedAnnotations: true
define view entity I_WrntyClaimDecisionCode
  as select from cwty003
  association [1..*] to I_WrntyClaimDecisionCodeText as _Text on $projection.WarrantyClaimItemDecisionCode = _Text.WarrantyClaimItemDecisionCode
{
  key rejcd as WarrantyClaimItemDecisionCode,
      dcsncode_cat as WrntyClaimDecisionCodeCategory ,
      _Text

}
where
      rejcd != '00000005'
  and rejcd != '0001'
  and rejcd != '0002'
//  and rejcd != '0003'
//  and rejcd != '0005'
  and rejcd != 'Z_APPROV'
  and rejcd != 'Z_REJECT'
  and rejcd != '0006'
```
