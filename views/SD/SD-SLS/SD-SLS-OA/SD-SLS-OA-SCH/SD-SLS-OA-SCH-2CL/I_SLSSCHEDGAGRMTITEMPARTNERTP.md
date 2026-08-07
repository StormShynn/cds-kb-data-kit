---
name: I_SLSSCHEDGAGRMTITEMPARTNERTP
description: Slsschedgagrmtitempartnertp
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
  - item-level
  - partner
  - component:SD-SLS-OA-SCH-2CL
  - lob:Sales & Distribution
---
# I_SLSSCHEDGAGRMTITEMPARTNERTP

**Slsschedgagrmtitempartnertp**

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
| `SalesSchedulingAgreementItem` | ✓ | |  |  |  |  |
| `PartnerFunction` | ✓ | |  |  |  |  |
| `PartnerFunctionForEdit` |  | |  |  |  |  |
| `Customer` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `Personnel` |  | |  |  |  |  |
| `ContactPerson` |  | |  |  |  |  |
| `ReferenceBusinessPartner` |  | |  |  |  |  |
| `Partner` |  | |  |  |  |  |
| `SalesSchedgAgrmtType` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `_Item` | | ✓ | | | | |
| `_SalesSchedulingAgreement` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Sales Scheduling Agreement Item Partner - TP'

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
   semanticKey: ['SalesSchedulingAgreement', 'SalesSchedulingAgreementItem', 'PartnerFunction']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_SlsSchedgAgrmtItemPartnerTP 
as projection on R_SlsSchedgAgrmtItemPartnerTP as SalesSchedgAgrmtItemPartner
{
  key SalesSchedgAgrmtItemPartner.SalesSchedulingAgreement,
  key SalesSchedgAgrmtItemPartner.SalesSchedulingAgreementItem,
  key SalesSchedgAgrmtItemPartner.PartnerFunction,
      @ObjectModel.editableFieldFor: 'PartnerFunction'
      SalesSchedgAgrmtItemPartner.PartnerFunctionForEdit,
      SalesSchedgAgrmtItemPartner.Customer,
      SalesSchedgAgrmtItemPartner.Supplier,
      SalesSchedgAgrmtItemPartner.Personnel,
      SalesSchedgAgrmtItemPartner.ContactPerson,
      SalesSchedgAgrmtItemPartner.ReferenceBusinessPartner,
      SalesSchedgAgrmtItemPartner.Partner,
      
      //    DCL
      @Consumption.hidden: true
      SalesSchedgAgrmtItemPartner.SalesSchedgAgrmtType,
      @Consumption.hidden: true
      SalesSchedgAgrmtItemPartner.SalesOrganization,
      @Consumption.hidden: true
      SalesSchedgAgrmtItemPartner.DistributionChannel,
      @Consumption.hidden: true
      SalesSchedgAgrmtItemPartner.OrganizationDivision,
      
      //Composition 
      _Item                     : redirected to parent I_SlsSchedulingAgreementItemTP, 
      _SalesSchedulingAgreement : redirected to I_SalesSchedulingAgreementTP      
}
```
