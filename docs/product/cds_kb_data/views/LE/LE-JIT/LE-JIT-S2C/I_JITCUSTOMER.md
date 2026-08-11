---
name: I_JITCUSTOMER
description: "A Just-In-Time customer is a master data object comprised of attributes related to a vehicle manufacturer such as the destination information and external status mapping. This CDS view provides the data to answer the following business questions: How many JIT customers exist in the system? What are the delivery split criteria of the customer for summarized and sequenced JIT call types? How many active customers exist? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITCUSTOMER')/$value
semantic_en: "A Just-In-Time customer is a master data object comprised of attributes related to a vehicle manufacturer such as the destination information and external status mapping. This CDS view provides the data to answer the following business questions: How many JIT customers exist in the system? What are the delivery split criteria of the customer for summarized and sequenced JIT call types? How many active customers exist? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "JIT Customer — CDS view giao diện dựa trên njit_d_cust_hdr."
keywords:
  - "jit"
  - "customer"
  - "ship"
  - "party"
  - "status"
  - "relevant"
  - "days"
  - "number"
  - "generation"
tags:
  - LE
  - bo:businesspartner
  - component:LE-JIT-S2C
  - customer
  - delivery
  - interface-view
  - LE-JIT
  - LE-JIT-S2C
  - lob:logistics execution
  - master-data
---
# I_JITCUSTOMER

**A Just-In-Time customer is a master data object comprised of attributes related to a vehicle manufacturer such as the destination information and external status mapping. This CDS view provides the data to answer the following business questions: How many JIT customers exist in the system? What are the delivery split criteria of the customer for summarized and sequenced JIT call types? How many active customers exist? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITCUSTOMER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustomerUUID` | ✓ | |  | `customeruuid` | `RAW(16)` | NodeID |
| `ShipToParty` |  | |  | `shiptoparty` | `CHAR(10)` | Ship-to Party |
| `JITCustomerStatus` |  | |  | `jitcustomerstatus` | `CHAR(1)` | JIT Customer Status |
| `IsJITRelevant` |  | |  | `isjitrelevant` |  |  |
| `DaysForIntJITNumberGeneration` |  | |  | `daysforintjitnumbergeneration` | `NUMC(4)` | External JIT Number Usage |
| `JITDeliveryHdrSplitCriterion` |  | |  | `jitdeliveryhdrsplitcriterion` | `CHAR(2)` | Criteria to split Delivery |
| `JITDeliveryItemSplitCriterion` |  | |  | `jitdeliveryitemsplitcriterion` |  |  |
| `JITSequenceNumberProfileID` |  | |  | `jitsequencenumberprofileid` | `CHAR(10)` | Sequence Number Profile |
| `JITDelivHdrSpltCritrnForPckg` |  | |  | `jitdelivhdrspltcritrnforpckg` | `CHAR(2)` | Criteria to split Delivery |
| `JITDelivConfIsUsed` |  | |  | `jitdelivconfisused` | `CHAR(1)` | Indicates if the JIT delivery is marked for confirmation |
| `JITDelivConfForReorder` |  | |  | `jitdelivconfforreorder` | `CHAR(1)` | Handle reorder JIT Calls via Delivery Confirmation |
| `CreatedByUser` |  | |  | `createdbyuser` | `CHAR(12)` | User Name |
| `CreationDateTime` |  | |  | `creationdatetime` | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
| `LastChangedByUser` |  | |  | `lastchangedbyuser` | `CHAR(12)` | User Name |
| `LastChangeDateTime` |  | |  | `lastchangedatetime` | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
| `_CustomerToBusinessPartner` | | ✓ | | | | |
| `_JITCustomerStatus` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_JITDeliverySplitCriteria` | | ✓ | | | | |
| `_JITDelivSplitCritraForSqnc` | | ✓ | | | | |
| `_JITDelivConfIsUsed` | | ✓ | | | | |
| `_JITDelivConfForReorder` | | ✓ | | | | |
| `_JITSequenceNumberProfile` | | ✓ | | | | |
| `_JITCustomerSupplyArea` | | ✓ | | | | |
| `_JITCustomerExternalStatus` | | ✓ | | | | |
| `_JITCustomerReferenceType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CustomerToBusinessPartner` | `I_Customer_to_BusinessPartner` | [0..1] |
| `_JITCustomerStatus` | `I_JITCustomerStatus` | [0..1] |
| `_LastChangedByUser` | `I_UserContactCard` | [0..1] |
| `_CreatedByUser` | `I_UserContactCard` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_JITDeliverySplitCriteria` | `I_JITDeliverySplitCriteria` | [0..1] |
| `_JITDelivSplitCritraForSqnc` | `I_JITDeliverySplitCriteria` | [0..1] |
| `_JITDelivConfIsUsed` | `I_JITDelivConfIsUsed` | [0..1] |
| `_JITDelivConfForReorder` | `I_JITDelivConfForReorder` | [0..1] |
| `_JITSequenceNumberProfile` | `I_JITSequenceNumberProfile` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITCUSTOMER')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITCUSTOMER')/$value)*

```abap
@AccessControl: {
  authorizationCheck        : #MANDATORY,
  personalData              : { blocking        : #REQUIRED },
  privilegedAssociations    : [ '_CreatedByUser', '_LastChangedByUser']
}
@Analytics                  : { dataCategory  : #DIMENSION,
                                internalName  : #LOCAL }
@EndUserText.label          : 'JIT Customer'
@Metadata.allowExtensions   : true
@ObjectModel                : {
    modelingPattern         : #ANALYTICAL_DIMENSION,
    representativeKey       : 'CustomerUUID',
    sapObjectNodeType.name  : 'JustInTimeCustomer',
    supportedCapabilities   : [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
    usageType               : { dataClass       : #MASTER,
                                serviceQuality  : #A,
                                sizeCategory    : #S }
}
@VDM.viewType               : #BASIC
define root view entity I_JITCustomer

  as select from njit_d_cust_hdr

  composition [0..*] of I_JITCustomerSupplyArea       as _JITCustomerSupplyArea

  composition [0..*] of I_JITCustomerExternalStatus   as _JITCustomerExternalStatus

  composition [0..*] of I_JITCustomerReferenceType    as _JITCustomerReferenceType

  association [0..1] to I_Customer_to_BusinessPartner as _CustomerToBusinessPartner  on $projection.CustomerUUID = _CustomerToBusinessPartner.BusinessPartnerUUID

  association [0..1] to I_JITCustomerStatus           as _JITCustomerStatus          on $projection.JITCustomerStatus = _JITCustomerStatus.JITCustomerStatus

  association [0..1] to I_UserContactCard             as _LastChangedByUser          on $projection.LastChangedByUser = _LastChangedByUser.ContactCardID

  association [0..1] to I_UserContactCard             as _CreatedByUser              on $projection.CreatedByUser = _CreatedByUser.ContactCardID

  association [0..1] to I_Customer                    as _Customer                   on $projection.ShipToParty = _Customer.Customer

  association [0..1] to I_JITDeliverySplitCriteria    as _JITDeliverySplitCriteria   on $projection.JITDeliveryHdrSplitCriterion = _JITDeliverySplitCriteria.JITDeliverySplitCriteria

  association [0..1] to I_JITDeliverySplitCriteria    as _JITDelivSplitCritraForSqnc on $projection.JITDelivHdrSpltCritrnForPckg = _JITDelivSplitCritraForSqnc.JITDeliverySplitCriteria

  association [0..1] to I_JITDelivConfIsUsed          as _JITDelivConfIsUsed         on $projection.JITDelivConfIsUsed = _JITDelivConfIsUsed.JITDelivConfIsUsed

  association [0..1] to I_JITDelivConfForReorder      as _JITDelivConfForReorder     on $projection.JITDelivConfForReorder = _JITDelivConfForReorder.JITDelivConfForReorder

  association [0..1] to I_JITSequenceNumberProfile    as _JITSequenceNumberProfile   on $projection.JITSequenceNumberProfileID = _JITSequenceNumberProfile.JITSequenceNumberProfileID

{
  key customeruuid                  as CustomerUUID,
      @ObjectModel.foreignKey.association: '_Customer'
      shiptoparty                   as ShipToParty,
      @ObjectModel.foreignKey.association: '_JITCustomerStatus'
      jitcustomerstatus             as JITCustomerStatus,
      isjitrelevant                 as IsJITRelevant,
      daysforintjitnumbergeneration as DaysForIntJITNumberGeneration,
      @ObjectModel.foreignKey.association: '_JITDeliverySplitCriteria'
      jitdeliveryhdrsplitcriterion  as JITDeliveryHdrSplitCriterion,
      jitdeliveryitemsplitcriterion as JITDeliveryItemSplitCriterion,
      @ObjectModel.foreignKey.association: '_JITSequenceNumberProfile'
      jitsequencenumberprofileid    as JITSequenceNumberProfileID,
      @ObjectModel.foreignKey.association: '_JITDelivSplitCritraForSqnc'
      jitdelivhdrspltcritrnforpckg  as JITDelivHdrSpltCritrnForPckg,
      @ObjectModel.foreignKey.association: '_JITDelivConfIsUsed'
      jitdelivconfisused            as JITDelivConfIsUsed,
      @ObjectModel.foreignKey.association: '_JITDelivConfForReorder'
      jitdelivconfforreorder        as JITDelivConfForReorder,
      @Semantics.user.createdBy: true
      createdbyuser                 as CreatedByUser,
      @Semantics.systemDateTime.createdAt: true
      creationdatetime              as CreationDateTime,
      @Semantics.user.lastChangedBy: true
      lastchangedbyuser             as LastChangedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      lastchangedatetime            as LastChangeDateTime,

      //Associations
      _JITCustomerSupplyArea,
      _JITCustomerExternalStatus,
      _JITCustomerReferenceType,
      _CustomerToBusinessPartner,
      _JITCustomerStatus,
      _CreatedByUser,
      _LastChangedByUser,
      _Customer,
      _JITDeliverySplitCriteria,
      _JITDelivSplitCritraForSqnc,
      _JITDelivConfIsUsed,
      _JITDelivConfForReorder,
      _JITSequenceNumberProfile

}
```
