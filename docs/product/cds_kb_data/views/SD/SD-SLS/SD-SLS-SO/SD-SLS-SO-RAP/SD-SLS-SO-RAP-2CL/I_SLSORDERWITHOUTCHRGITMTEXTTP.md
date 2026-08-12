---
name: I_SLSORDERWITHOUTCHRGITMTEXTTP
description: "Slsorderwithoutchrgitmtexttp"
app_component: SD-SLS-SO-RAP-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-SO
  - interface-view
  - transactional-processing
  - text
  - component:SD-SLS-SO-RAP-2CL
  - lob:Sales & Distribution
---
# I_SLSORDERWITHOUTCHRGITMTEXTTP

**Slsorderwithoutchrgitmtexttp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-SO-RAP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesOrderWithoutCharge` |  | |  | `key SlsOrderWithoutChargeItemText. SalesOrderWithoutCharge` |  |  |
| `SalesOrderWithoutChargeItem` |  | |  | `key SlsOrderWithoutChargeItemText. SalesOrderWithoutChargeItem` |  |  |
| `Language` | ✓ | |  |  |  |  |
| `LongTextID` | ✓ | |  |  |  |  |
| `LongTextIDForEdit` |  | |  |  |  |  |
| `LanguageForEdit` |  | |  |  |  |  |
| `LongText` |  | |  |  |  |  |
| `SalesOrderWithoutChargeType` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `_Item` | | ✓ | | | | |
| `_SalesOrderWithoutCharge` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Sls Ord Without Charge Item - Text TP'

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   modelingPattern:        #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #L,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['SalesOrderWithoutCharge', 'SalesOrderWithoutChargeItem', 'Language', 'LongTextID'],
   dataCategory: #TEXT
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_SlsOrderWithoutChrgItmTextTP
  as projection on R_SlsOrderWithoutChrgItmTextTP as SlsOrderWithoutChargeItemText
{
  key SlsOrderWithoutChargeItemText. SalesOrderWithoutCharge,
  key SlsOrderWithoutChargeItemText. SalesOrderWithoutChargeItem,
      @Semantics.language:true
  key SlsOrderWithoutChargeItemText.Language,
  key SlsOrderWithoutChargeItemText.LongTextID,

      @ObjectModel.editableFieldFor: 'LongTextID'
      SlsOrderWithoutChargeItemText.LongTextIDForEdit,
      @Semantics.language:true
      @ObjectModel.editableFieldFor: 'Language'
      SlsOrderWithoutChargeItemText.LanguageForEdit,
      @Semantics.text:true
      SlsOrderWithoutChargeItemText.LongText,

      //    DCL
      @Consumption.hidden: true
      SlsOrderWithoutChargeItemText.SalesOrderWithoutChargeType,
      @Consumption.hidden: true
      SlsOrderWithoutChargeItemText.SalesOrganization,
      @Consumption.hidden: true
      SlsOrderWithoutChargeItemText.DistributionChannel,
      @Consumption.hidden: true
      SlsOrderWithoutChargeItemText.OrganizationDivision,

      //Composition
      _Item       : redirected to parent I_SlsOrderWithoutChargeItemTP,
      _SalesOrderWithoutCharge : redirected to I_SalesOrderWithoutChargeTP
}
```
