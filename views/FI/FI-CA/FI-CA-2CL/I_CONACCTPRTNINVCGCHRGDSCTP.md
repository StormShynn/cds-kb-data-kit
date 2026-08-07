---
name: I_CONACCTPRTNINVCGCHRGDSCTP
description: Conacctprtninvcgchrgdsctp
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - transactional-processing
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CONACCTPRTNINVCGCHRGDSCTP

**Conacctprtninvcgchrgdsctp**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ContractAccount` | ✓ | |  |  |  |  |
| `BusinessPartner` | ✓ | |  |  |  |  |
| `CAInvcgChargeAndDiscountKey` | ✓ | |  |  |  |  |
| `CAInvcgChrgAndDiscKeyStartDate` | ✓ | |  |  |  |  |
| `CAInvcgChrgDscKeyFoEd` |  | |  |  |  |  |
| `CAInvcgChrgDscKeyStrtDtFoEd` |  | |  |  |  |  |
| `CAInvcgChrgAndDiscKeyEndDate` |  | |  |  |  |  |
| `_BusinessPartner` | | ✓ | | | | |
| `_CAInvcgChrgAndDiscKey` | | ✓ | | | | |
| `_ContractAccount` | | ✓ | | | | |
| `_ContractAccountPartner` | | ✓ | | | | |

## Source Code

```abap
@AccessControl: { authorizationCheck: #MANDATORY,
                  personalData: { blocking: #REQUIRED,
                                  blockingIndicator: ['_BusinessPartner.IsBusinessPurposeCompleted'] } }

@EndUserText.label: 'Contr Acct Prtn Invcg Chrg and Disc - TP'

@ObjectModel: { modelingPattern: #TRANSACTIONAL_INTERFACE,
                representativeKey: 'CAInvcgChargeAndDiscountKey',
                sapObjectNodeType.name: 'ContrAcctPrtnInvcgChrgAndDisc',
                supportedCapabilities:  [#TRANSACTIONAL_PROVIDER],
                usageType: { dataClass: #MASTER,
                             serviceQuality: #C,
                             sizeCategory: #XL } }

@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #TRANSACTIONAL }
@Metadata.ignorePropagatedAnnotations: true
define view entity I_ConAcctPrtnInvcgChrgDscTP 
  as projection on R_ConAcctPrtnInvcgChrgDscTP
{
  key ContractAccount,
  key BusinessPartner,
  key CAInvcgChargeAndDiscountKey,
  key CAInvcgChrgAndDiscKeyStartDate,
  
  @ObjectModel.editableFieldFor: 'CAInvcgChargeAndDiscountKey'
  CAInvcgChrgDscKeyFoEd,
  @ObjectModel.editableFieldFor: 'CAInvcgChrgAndDiscKeyStartDate'
  CAInvcgChrgDscKeyStrtDtFoEd,
  
  CAInvcgChrgAndDiscKeyEndDate,
  
  /* Associations */
  _BusinessPartner,
  _CAInvcgChrgAndDiscKey,
  _ContractAccount: redirected to I_ContractAccountTP,
  _ContractAccountPartner: redirected to parent I_ContractAccountPartnerTP
}
```
