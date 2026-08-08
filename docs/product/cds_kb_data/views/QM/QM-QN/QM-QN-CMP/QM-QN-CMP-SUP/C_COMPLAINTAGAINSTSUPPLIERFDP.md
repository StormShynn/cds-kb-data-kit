---
name: C_COMPLAINTAGAINSTSUPPLIERFDP
description: "FDP for Complaint Against Supplier"
app_component: QM-QN-CMP-SUP
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COMPLAINTAGAINSTSUPPLIERFDP')/$value
semantic_en: "FDP for Complaint Against Supplier"
semantic_vi: "FDP for Complaint Against Supplier — CDS view tiêu dùng (transactional data) dựa trên I_ComplaintAgainstSupplier."
keywords:
  - "fdp"
  - "for"
  - "complaint"
  - "against"
  - "supplier"
  - "plant"
  - "name"
  - "qlty"
  - "cmpl"
  - "lifecycle"
  - "status"
  - "master"
  - "language"
tags:
  - QM
  - component:QM-QN-CMP-SUP
  - consumption-view
  - lob:quality management
  - QM-QN
  - QM-QN-CMP
  - QM-QN-CMP-SUP
  - supplier
---
# C_COMPLAINTAGAINSTSUPPLIERFDP

**FDP for Complaint Against Supplier**

| Property | Value |
|---|---|
| App Component | `QM-QN-CMP-SUP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COMPLAINTAGAINSTSUPPLIERFDP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ComplaintAgainstSupplier` | ✓ | | `_cas` | `ComplaintAgainstSupplier` | `CHAR(12)` | Number of Quality Complaint |
| `Plant` |  | | `_cas` | `Plant` | `CHAR(4)` | Plant |
| `PlantName` |  | | `_cas._Plant` | `PlantName` | `CHAR(30)` | Plant Name |
| `QltyCmplLifecycleStatus` |  | | `_cas` | `QltyCmplLifecycleStatus` | `CHAR(2)` | Lifecycle Status of Quality Complaint |
| `MasterLanguage` |  | | `_cas` | `MasterLanguage` | `LANG(1)` | Original Language |
| `QualityComplaintDescription` |  | | `_cas` | `QualityComplaintDescription` | `CHAR(40)` | Short Description of Quality Complaint |
| `CmplAgnstSuplrDetailedDesc` |  | |  | `_CmplAgnstSuplrLongText[ to one: ComplaintAgainstSupplier = $projection.complaintagainstsupplier and Language = $projection.masterlanguage and LongTextInternalNumber = 1 ].CmplAgnstSuplrLongText` |  |  |
| `QualityIssueReference` |  | | `_cas` | `QualityIssueReference` | `CHAR(40)` | External Reference Number |
| `QltyCmplPlannedStartDateTime` |  | | `_cas` | `QltyCmplPlannedStartDateTime` | `DEC(15)` | Planned Start Date and Time of Quality Complaint |
| `QltyCmplPlannedEndDateTime` |  | | `_cas` | `QltyCmplPlannedEndDateTime` | `DEC(15)` | Planned End Date and Time of Quality Complaint |
| `BusinessPartner` |  | |  | `_CmplAgnstSuplrPartner[ to one: ComplaintAgainstSupplier = $projection.complaintagainstsupplier and QualityComplaintIsSupplier = 'X' ].BusinessPartner` | `CHAR(10)` | Business Partner Number |
| `BPSupplierName` |  | |  | `_CmplAgnstSuplrPartner[ to one: ComplaintAgainstSupplier = $projection.complaintagainstsupplier and QualityComplaintIsSupplier = 'X' ].BusinessPartnerName` | `CHAR(81)` |  |
| `Supplier` |  | | `_castosup._SupplierToBusinessPartner` | `Supplier` | `CHAR(10)` | Account Number of Supplier |
| `SupplierName` |  | | `_castosup._SupplierToBusinessPartner._Supplier` | `SupplierName` | `CHAR(80)` | Name of Supplier |
| `QltyCmplCompletedByUser` |  | | `_cas` | `QltyCmplCompletedByUser` | `CHAR(12)` | User Who Completed the Quality Complaint |
| `QltyCmplCompletedByUsrFullName` |  | |  | `cast( _QltyCmplCmpltdByUsrCntctCard.FullName as vdm_qm_completedbyuserdesc preserving type )` | `CHAR(80)` | Completed by User - Description |
| `QltyCmplCmpltdOnDateTime` |  | | `_cas` | `QltyCmplCmpltdOnDateTime` | `DEC(15)` | Completion Date and Time of Quality Complaint |
| `CreatedByUser` |  | | `_cas` | `CreatedByUser` | `CHAR(12)` | User Who Created the Object |
| `CreatedByUserFullName` |  | |  | `cast( _CreatedByUserContactCard.FullName as vdm_qm_createdbyuserdesc preserving type )` | `CHAR(80)` | Created by User - Description |
| `QltyCmplCreatedOnDateTime` |  | | `_cas` | `QltyCmplCreatedOnDateTime` | `DEC(15)` | Date and Time of Creation |
| `LastChangedByUser` |  | | `_cas` | `LastChangedByUser` | `CHAR(12)` | User Who Last Changed the Object |
| `LastChangedByUserFullName` |  | |  | `cast( _LastChangedByUserContactCard.FullName as vdm_qm_lastchangedbyuserdesc preserving type )` | `CHAR(80)` | Last Changed by User - Description |
| `QltyCmplLastChangedOnDateTime` |  | | `_cas` | `QltyCmplLastChangedOnDateTime` | `DEC(15)` | Date and Time of the Last Change |
| `_CmplAgnstSuplrPartner` | | ✓ | | | | |
| `_CmplAgainstSupplierItem` | | ✓ | | | | |
| `_CmplAgainstSuplrDefectRef` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CmplAgnstSuplrPartner` | `C_CmplAgnstSupplierPartnerFDP` | [0..*] |
| `_CmplAgainstSupplierItem` | `C_CmplAgainstSupplierItemFDP` | [0..*] |
| `_CmplAgainstSuplrDefectRef` | `C_CmplAgnstSuplrDefectRefFDP` | [0..*] |
| `_CmplAgnstSuplrLongText` | `I_CmplAgnstSuplrLongText` | [0..*] |
| `_QltyCmplCmpltdByUsrCntctCard` | `I_UserContactCard` | [0..1] |
| `_CreatedByUserContactCard` | `I_UserContactCard` | [0..1] |
| `_LastChangedByUserContactCard` | `I_UserContactCard` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COMPLAINTAGAINSTSUPPLIERFDP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COMPLAINTAGAINSTSUPPLIERFDP')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl: {
    authorizationCheck: #MANDATORY,
    personalData.blocking: #REQUIRED
}
@EndUserText.label: 'FDP for Complaint Against Supplier'
@VDM: {
    viewType: #CONSUMPTION
    // lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities:
    [ #OUTPUT_FORM_DATA_PROVIDER ]
@ObjectModel.modelingPattern: #OUTPUT_FORM_DATA_PROVIDER
@ObjectModel: {
    usageType: {
        dataClass: #TRANSACTIONAL,
        sizeCategory: #M,
        serviceQuality: #D },
    representativeKey: 'ComplaintAgainstSupplier',
    semanticKey:  [ 'ComplaintAgainstSupplier' ]
}
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@Consumption.semanticObject: 'ComplaintAgainstSupplier'
define view entity C_ComplaintAgainstSupplierFDP
  as select from    I_ComplaintAgainstSupplier   as _cas
    left outer join P_CmplAgnstSuplrToBizPartner as _castosup on _cas.ComplaintAgainstSupplier = _castosup.ComplaintAgainstSupplier

  association [0..*] to C_CmplAgnstSupplierPartnerFDP as _CmplAgnstSuplrPartner        on $projection.ComplaintAgainstSupplier = _CmplAgnstSuplrPartner.ComplaintAgainstSupplier
  association [0..*] to C_CmplAgainstSupplierItemFDP  as _CmplAgainstSupplierItem      on $projection.ComplaintAgainstSupplier = _CmplAgainstSupplierItem.ComplaintAgainstSupplier
  association [0..*] to C_CmplAgnstSuplrDefectRefFDP  as _CmplAgainstSuplrDefectRef    on $projection.ComplaintAgainstSupplier = _CmplAgainstSuplrDefectRef.ComplaintAgainstSupplier
  association [0..*] to I_CmplAgnstSuplrLongText      as _CmplAgnstSuplrLongText       on $projection.ComplaintAgainstSupplier = _CmplAgnstSuplrLongText.ComplaintAgainstSupplier
  association [0..1] to I_UserContactCard             as _QltyCmplCmpltdByUsrCntctCard on $projection.QltyCmplCompletedByUser = _QltyCmplCmpltdByUsrCntctCard.ContactCardID
  association [0..1] to I_UserContactCard             as _CreatedByUserContactCard     on $projection.CreatedByUser = _CreatedByUserContactCard.ContactCardID
  association [0..1] to I_UserContactCard             as _LastChangedByUserContactCard on $projection.LastChangedByUser = _LastChangedByUserContactCard.ContactCardID
{
      @ObjectModel.text.element: [ 'QualityComplaintDescription' ]
  key _cas.ComplaintAgainstSupplier,

      @ObjectModel.text.element: [ 'PlantName' ]
      _cas.Plant,
      @Semantics.text: true
      _cas._Plant.PlantName,

      @ObjectModel.text.element: [ 'QltyCmplLifecycleStatusText' ]
      _cas.QltyCmplLifecycleStatus,
      @Semantics.text: true
      _cas._QltyCmplLifecycleStatus._Text[ 1: Language = $session.system_language ].QltyCmplLifecycleStatusText,

      @Semantics.language: true
      _cas.MasterLanguage,

      @Semantics.text: true
      _cas.QualityComplaintDescription,
      @EndUserText: { label: 'Complaint Detailed Description', quickInfo: 'Complaint Detailed Description' }
      _CmplAgnstSuplrLongText[ to one: ComplaintAgainstSupplier = $projection.complaintagainstsupplier
                                   and Language                 = $projection.masterlanguage
                                   and LongTextInternalNumber   = 1  ].CmplAgnstSuplrLongText        as CmplAgnstSuplrDetailedDesc,

      _cas.QualityIssueReference,
      _cas.QltyCmplPlannedStartDateTime,
      _cas.QltyCmplPlannedEndDateTime,

      @EndUserText.label: 'Supplier (Business Partner)'
      @EndUserText.quickInfo: 'Supplier (Business Partner)'
      @ObjectModel: { text.element: [ 'BPSupplierName' ] }
      _CmplAgnstSuplrPartner[ to one: ComplaintAgainstSupplier = $projection.complaintagainstsupplier
                                  and QualityComplaintIsSupplier = 'X' ].BusinessPartner             as BusinessPartner,

      @EndUserText.label: 'Supplier (Business Partner) Name'
      @EndUserText.quickInfo: 'Supplier (Business Partner) Name'
      @Semantics.text: true
      _CmplAgnstSuplrPartner[ to one: ComplaintAgainstSupplier = $projection.complaintagainstsupplier
                                  and QualityComplaintIsSupplier = 'X' ].BusinessPartnerName         as BPSupplierName,

      @ObjectModel: { text.element: [ 'SupplierName' ] }
      _castosup._SupplierToBusinessPartner.Supplier                                                  as Supplier,
      @Semantics.text: true
      _castosup._SupplierToBusinessPartner._Supplier.SupplierName                                    as SupplierName,

      @ObjectModel: { text.element: [ 'QltyCmplCompletedByUsrFullName' ] }
      _cas.QltyCmplCompletedByUser,
      @Semantics.text: true
      cast( _QltyCmplCmpltdByUsrCntctCard.FullName as vdm_qm_completedbyuserdesc preserving type )   as QltyCmplCompletedByUsrFullName,
      _cas.QltyCmplCmpltdOnDateTime,

      @ObjectModel: { text.element: [ 'CreatedByUserFullName' ] }
      _cas.CreatedByUser,
      @Semantics.text: true
      cast( _CreatedByUserContactCard.FullName as vdm_qm_createdbyuserdesc preserving type )         as CreatedByUserFullName,
      _cas.QltyCmplCreatedOnDateTime,

      @ObjectModel: { text.element: [ 'LastChangedByUserFullName' ] }
      _cas.LastChangedByUser,
      @Semantics.text: true
      cast( _LastChangedByUserContactCard.FullName as vdm_qm_lastchangedbyuserdesc preserving type ) as LastChangedByUserFullName,
      _cas.QltyCmplLastChangedOnDateTime,

      /* Associations */
      _CmplAgnstSuplrPartner,
      _CmplAgainstSupplierItem,
      _CmplAgainstSuplrDefectRef

}
```
