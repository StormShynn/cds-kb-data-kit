---
name: C_LEGALTRANSLINKEDOBJCUBE
description: "This CDS view provides the data to answer the following business questions: What is the percentage of legal transactions with linked object? What is the number of legal transactions with linked object? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CM-GF-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LEGALTRANSLINKEDOBJCUBE')/$value
semantic_en: "This CDS view provides the data to answer the following business questions: What is the percentage of legal transactions with linked object? What is the number of legal transactions with linked object? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Legal Transaction Linked Obj - Cube — CDS view tiêu dùng dựa trên I_LegalTransaction."
keywords:
  - "legal"
  - "transaction"
  - "linked"
  - "obj"
  - "cube"
  - "linkd"
  - "cntnt"
  - "type"
  - "name"
tags:
  - CM
  - bo:companycode
  - CM-GF
  - CM-GF-2CL
  - component:CM-GF-2CL
  - consumption-view
  - transaction
---
# C_LEGALTRANSLINKEDOBJCUBE

**This CDS view provides the data to answer the following business questions: What is the percentage of legal transactions with linked object? What is the number of legal transactions with linked object? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CM-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LEGALTRANSLINKEDOBJCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LegalTransactionUUID` | ✓ | |  |  | `RAW(16)` | Universal Unique Identifier |
| `LegalTransactionLinkdObjUUID` | ✓ | | `_LegalTrLinkedObjectsTP` | `LegalTransactionLinkdObjUUID` | `RAW(16)` | Universal Unique Identifier |
| `LglCntntMLinkdObjType` |  | | `_LegalTrLinkedObjectsTP` | `LglCntntMLinkdObjType` | `CHAR(4)` | Linked Object Type |
| `LglCntntMLinkdObjTypeName` |  | | `_LinkedObjectTypeText` | `LglCntntMLinkdObjTypeName` | `CHAR(40)` | Long Text |
| `LglCntntMLinkdObj` |  | | `_LegalTrLinkedObjectsTP` | `LglCntntMLinkdObj` | `CHAR(255)` | Linked Object ID |
| `LegalTransactionTopUUID` |  | | `_LegalTransaction` | `LegalTransactionUUID` | `RAW(16)` | Universal Unique Identifier |
| `LegalTransactionIsTriggerObj` |  | | `_LegalTrLinkedObjectsTP` | `LegalTransactionIsTriggerObj` | `CHAR(1)` | Denotes if linked object is trigger object |
| `LglTransTriggerObjNameText` |  | |  | `case when _LegalTrLinkedObjectsTP.LegalTransactionIsTriggerObj = 'X' then cast ( 'X' as lcm_lgltranstriggerobjnametext ) else cast( ' ' as lcm_lgltranstriggerobjnametext ) end` | `CHAR(1)` | Text for Legal Transaction with Triggering Object |
| `LegalTransactionHealthName` |  | | `_LegalTrLinkedObjectsTP._LegalTransactionTP._LegalTransactionHealthText` | `LegalTransactionHealthName` | `CHAR(40)` | Long Text |
| `LglCntntMEntity` |  | | `_LegalTrLinkedObjectsTP._LegalTransaction._MainLegalTransactionEntity` | `LglCntntMEntity` | `CHAR(10)` | Entity ID |
| `LglCntntMEntityTypeName` |  | | `_LegalTrLinkedObjectsTP._LegalTransaction._MainLegalTransactionEntity` | `LglCntntMEntityTypeName` | `CHAR(40)` | Long Text |
| `LglCntntMGovLawText` |  | |  | `_LegalTrLinkedObjectsTP._LegalTransaction._LglCntntMGovLawText[1: Language = $session.system_language].LglCntntMGovLawText` | `CHAR(92)` | Governing Law Text |
| `LegalTransactionHealth` |  | | `_LegalTransaction` | `LegalTransactionHealth` | `CHAR(4)` | Legal Transaction Status |
| `LglCntntMMainOrgTypeName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `LglCntntMMainOrgName` |  | |  | `case when LegalTransaction.LglCntntMMainOrgType = '04' then LegalTransaction._SalesOrganizationText.SalesOrganizationName when LegalTransaction.LglCntntMMainOrgType = '05' then LegalTransaction._PurchasingOrganization.PurchasingOrganizationName else LegalTransaction._CompanyCode.CompanyCodeName end` | `CHAR(25)` | Name of Company Code or Company |
| `TotalNumberOfLegalTransactions` |  | |  | `cast( 1 as lcm_totallt )` | `INT4(10)` | Total Numbers of Legal Transaction |
| `TotNrOfLegalTransWithLinkedObj` |  | |  | `cast (1 as abap.int4(10) )` | `INT4(10)` |  |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LegalTransaction` | `I_LegalTransaction` | [1..1] |
| `_LinkedObjectTypeText` | `I_LCMLinkedObjectTypeText` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LEGALTRANSLINKEDOBJCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LEGALTRANSLINKEDOBJCUBE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CLGLTRLKOBJCUBE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck:#CHECK
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #L
@VDM.viewType: #CONSUMPTION
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics.dataCategory: #CUBE
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations:true
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@EndUserText.label: 'Legal Transaction Linked Obj - Cube'
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER  ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@Analytics.internalName:#LOCAL

define view C_LegalTransLinkedObjCube
  as select from           I_LegalTransaction       as LegalTransaction
    left outer to one join I_LegalTrLinkedObjectsTP as _LegalTrLinkedObjectsTP on LegalTransaction.LegalTransactionUUID = _LegalTrLinkedObjectsTP.LegalTransactionUUID
  association [1..1] to I_LegalTransaction        as _LegalTransaction     on  _LegalTrLinkedObjectsTP.LegalTransactionUUID = _LegalTransaction.LegalTransactionUUID
                                                                           and _LegalTransaction.IsEndOfPurposeBlocked      = ''
  association [0..1] to I_LCMLinkedObjectTypeText as _LinkedObjectTypeText on  $projection.LglCntntMLinkdObjType = _LinkedObjectTypeText.LglCntntMLinkdObjType
                                                                           and _LinkedObjectTypeText.Language    = $session.system_language
{
  key LegalTransaction.LegalTransactionUUID                                                                                      as LegalTransactionUUID,
  key _LegalTrLinkedObjectsTP.LegalTransactionLinkdObjUUID                                                                       as LegalTransactionLinkdObjUUID,
      _LegalTrLinkedObjectsTP.LglCntntMLinkdObjType,
      _LinkedObjectTypeText.LglCntntMLinkdObjTypeName,
      _LegalTrLinkedObjectsTP.LglCntntMLinkdObj,
      _LegalTransaction.LegalTransactionUUID                                                                                     as LegalTransactionTopUUID,
      _LegalTrLinkedObjectsTP.LegalTransactionIsTriggerObj,

      case when  _LegalTrLinkedObjectsTP.LegalTransactionIsTriggerObj = 'X' then
              cast ( 'X' as lcm_lgltranstriggerobjnametext  )
           else
              cast( ' ' as lcm_lgltranstriggerobjnametext ) end                                                                  as LglTransTriggerObjNameText,

      _LegalTrLinkedObjectsTP._LegalTransactionTP._LegalTransactionHealthText.LegalTransactionHealthName                         as LegalTransactionHealthName,
      _LegalTrLinkedObjectsTP._LegalTransaction._MainLegalTransactionEntity.LglCntntMEntity                                      as LglCntntMEntity,
      _LegalTrLinkedObjectsTP._LegalTransaction._MainLegalTransactionEntity.LglCntntMEntityTypeName                              as LglCntntMEntityTypeName,
      _LegalTrLinkedObjectsTP._LegalTransaction._LglCntntMGovLawText[1: Language = $session.system_language].LglCntntMGovLawText as LglCntntMGovLawText,
      _LegalTransaction.LegalTransactionHealth                                                                                   as LegalTransactionHealth,

      LegalTransaction._LglCntntMMainOrgTypeText.LglCntntMMainOrgTypeName                                                        as LglCntntMMainOrgTypeName,

      case
      when LegalTransaction.LglCntntMMainOrgType = '04' then
           LegalTransaction._SalesOrganizationText.SalesOrganizationName
      when LegalTransaction.LglCntntMMainOrgType = '05' then
           LegalTransaction._PurchasingOrganization.PurchasingOrganizationName
        else
           LegalTransaction._CompanyCode.CompanyCodeName
        end                                                                                                                      as LglCntntMMainOrgName,

      @Aggregation.referenceElement: ['LegalTransactionUUID']
      @Aggregation.default: #COUNT_DISTINCT
      cast( 1 as  lcm_totallt )                                                                                                  as TotalNumberOfLegalTransactions,

      @EndUserText.label: 'Legal Transactions with linked object'
      @Aggregation.referenceElement: ['LegalTransactionTopUUID']
      @Aggregation.default: #COUNT_DISTINCT
      cast (1 as abap.int4(10) )                                                                                                 as TotNrOfLegalTransWithLinkedObj
}
where
  LegalTransaction.IsEndOfPurposeBlocked = ''
```
