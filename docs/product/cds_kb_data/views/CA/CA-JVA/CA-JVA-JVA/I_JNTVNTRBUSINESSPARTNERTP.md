---
name: I_JNTVNTRBUSINESSPARTNERTP
description: "JNTVNTRBusiness PartnerTP"
app_component: CA-JVA-JVA
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-JVA
  - CA-JVA-JVA
  - interface-view
  - transactional-processing
  - business-partner
  - partner
  - component:CA-JVA-JVA
  - lob:Cross-Application Components
  - bo:BusinessPartner
---
# I_JNTVNTRBUSINESSPARTNERTP

**JNTVNTRBusiness PartnerTP**

| Property | Value |
|---|---|
| App Component | `CA-JVA-JVA` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  |  |  |
| `JointVenturePartner` | ✓ | |  |  |  |  |
| `JointVenturePartner2ShortText` |  | |  |  |  |  |
| `JntVntrIntcoCode` |  | |  |  |  |  |
| `JntVntrCashCallThld` |  | |  |  |  |  |
| `JntVntrHardCopyBillgIsSupp` |  | |  |  |  |  |
| `JntVntrOwnrIsEDITo` |  | |  |  |  |  |
| `JntVentureIsConvenienceNetting` |  | |  |  |  |  |
| `JntVntrBillgFormat` |  | |  |  |  |  |
| `TaxCode` |  | |  |  |  |  |
| `EDIReceiver` |  | |  |  |  |  |
| `JntVntrPartnerProcessGrp` |  | |  |  |  |  |
| `JntVntrPartEquityCashCallThld` |  | |  |  |  |  |
| `JntVntrPartProjCashCallThld` |  | |  |  |  |  |
| `ResponsibleContact` |  | |  |  |  |  |
| `ContactPhoneNumber` |  | |  |  |  |  |
| `JntVntrGeneratedExpndtrSet` |  | |  |  |  |  |
| `Currency` |  | |  |  |  |  |
| `JntVntrBillgThldDebit` |  | |  |  |  |  |
| `JntVntrBillgThldCredit` |  | |  |  |  |  |
| `JntVntrBillgThldIsActive` |  | |  |  |  |  |
| `JntVntrBillgReportsAreSpprsd` |  | |  |  |  |  |
| `JntVntrSeparateBillgIsPrepared` |  | |  |  |  |  |
| `_BusinessPartner` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'JVABusinessPartner - TP'
@Metadata.ignorePropagatedAnnotations: true

@OData:{
  entityType.name: 'JVABusinessPartner_Type',
  entitySet.name: 'JVABusinessPartner'
}

@AccessControl:{
  authorizationCheck: #MANDATORY,
  personalData.blocking: #BLOCKED_DATA_EXCLUDED
}

@VDM: { 
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API,  
  usage.type: [#TRANSACTIONAL_PROCESSING_SERVICE]
}

@ObjectModel:{
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  sapObjectNodeType.name: 'JVABusinessPartner',
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #L
  }
}


define root view entity I_JntVntrBusinessPartnerTP
  provider contract transactional_interface
  as projection on R_JntVntrBusinessPartnerTP
  
{

  key CompanyCode,  
  key JointVenturePartner,
      @Semantics.text: true
      JointVenturePartner2ShortText,
      JntVntrIntcoCode,
      JntVntrCashCallThld,
      JntVntrHardCopyBillgIsSupp,
      JntVntrOwnrIsEDITo,
      JntVentureIsConvenienceNetting,
      JntVntrBillgFormat,
      TaxCode,
      EDIReceiver,
      JntVntrPartnerProcessGrp,
      JntVntrPartEquityCashCallThld,
      JntVntrPartProjCashCallThld,
      ResponsibleContact,
      ContactPhoneNumber,
      JntVntrGeneratedExpndtrSet,
      Currency,
      @Semantics.amount.currencyCode : 'Currency'
      JntVntrBillgThldDebit,
      @Semantics.amount.currencyCode : 'Currency'
      JntVntrBillgThldCredit,
      JntVntrBillgThldIsActive,
      JntVntrBillgReportsAreSpprsd,
      JntVntrSeparateBillgIsPrepared,
      
  /* Associations */
  _BusinessPartner,
  _CompanyCode
  
}
```
