---
name: I_SLSSCHEDGAGRMTTEXTTP
description: Slsschedgagrmttexttp
app_component: SD-SLS-OA-SCH-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-OA
  - interface-view
  - transactional-processing
  - text
  - component:SD-SLS-OA-SCH-2CL
  - lob:Sales & Distribution
---
# I_SLSSCHEDGAGRMTTEXTTP

**Slsschedgagrmttexttp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-SCH-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesSchedulingAgreement` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `LongTextID` | ✓ | |  |  |  |  |
| `LongTextIDForEdit` |  | |  |  |  |  |
| `LanguageForEdit` |  | |  |  |  |  |
| `LongText` |  | |  |  |  |  |
| `SalesSchedgAgrmtType` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `_SalesSchedulingAgreement` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Sales Scheduling Agreement - Text TP'

@AccessControl.authorizationCheck: #CHECK
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
   semanticKey: ['SalesSchedulingAgreement', 'Language', 'LongTextID'],
   dataCategory: #TEXT
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_SlsSchedgAgrmtTextTP 
as projection on R_SlsSchedgAgrmtTextTP as SlsSchedgAgrmtText
{
  key SlsSchedgAgrmtText.SalesSchedulingAgreement,
  @Semantics.language:true    
  key SlsSchedgAgrmtText.Language,
  key SlsSchedgAgrmtText.LongTextID,
  
      @ObjectModel.editableFieldFor: 'LongTextID'
      SlsSchedgAgrmtText.LongTextIDForEdit,
      @Semantics.language:true
      @ObjectModel.editableFieldFor: 'Language'
      SlsSchedgAgrmtText.LanguageForEdit,
      @Semantics.text:true
      SlsSchedgAgrmtText.LongText, 
      
      //    DCL
      @Consumption.hidden: true
      SlsSchedgAgrmtText.SalesSchedgAgrmtType,
      @Consumption.hidden: true
      SlsSchedgAgrmtText.SalesOrganization,
      @Consumption.hidden: true
      SlsSchedgAgrmtText.DistributionChannel,
      @Consumption.hidden: true
      SlsSchedgAgrmtText.OrganizationDivision,
      
      //Composition
      _SalesSchedulingAgreement : redirected to parent I_SalesSchedulingAgreementTP     
}
```
