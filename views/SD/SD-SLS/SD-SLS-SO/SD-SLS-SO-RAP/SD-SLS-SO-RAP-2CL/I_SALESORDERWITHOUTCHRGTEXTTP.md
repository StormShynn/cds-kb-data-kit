---
name: I_SALESORDERWITHOUTCHRGTEXTTP
description: Sales OrderWITHOUTCHRGTEXTTP
app_component: SD-SLS-SO-RAP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-SO
  - interface-view
  - transactional-processing
  - sales-order
  - text
  - component:SD-SLS-SO-RAP-2CL
  - lob:Sales & Distribution
  - bo:SalesOrder
---
# I_SALESORDERWITHOUTCHRGTEXTTP

**Sales OrderWITHOUTCHRGTEXTTP**

| Property | Value |
|---|---|
| App Component | `SD-SLS-SO-RAP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesOrderWithoutCharge` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `LongTextID` | ✓ | |  |  |  |  |
| `LongTextIDForEdit` |  | |  |  |  |  |
| `LanguageForEdit` |  | |  |  |  |  |
| `LongText` |  | |  |  |  |  |
| `SalesOrderWithoutChargeType` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `_SalesOrderWithoutCharge` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Sales Order Without Charge - Text TP'

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   modelingPattern:        #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #L,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['SalesOrderWithoutCharge', 'Language', 'LongTextID'],
   dataCategory: #TEXT
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_SalesOrderWithoutChrgTextTP 
  as projection on R_SalesOrderWithoutChrgTextTP as SalesOrderWithoutChargeText
{
  key SalesOrderWithoutChargeText.SalesOrderWithoutCharge,
  @Semantics.language:true
  key SalesOrderWithoutChargeText.Language,
  key SalesOrderWithoutChargeText.LongTextID,
  
  @ObjectModel.editableFieldFor: 'LongTextID'
  SalesOrderWithoutChargeText.LongTextIDForEdit,
  @Semantics.language:true  
  @ObjectModel.editableFieldFor: 'Language'
  SalesOrderWithoutChargeText.LanguageForEdit,
  @Semantics.text:true
  SalesOrderWithoutChargeText.LongText,
  
  //    DCL
  @Consumption.hidden: true
  SalesOrderWithoutChargeText.SalesOrderWithoutChargeType,
  @Consumption.hidden: true
  SalesOrderWithoutChargeText.SalesOrganization,
  @Consumption.hidden: true
  SalesOrderWithoutChargeText.DistributionChannel,
  @Consumption.hidden: true
  SalesOrderWithoutChargeText.OrganizationDivision,
  
  //Composition
  _SalesOrderWithoutCharge : redirected to parent I_SalesOrderWithoutChargeTP
}
```
