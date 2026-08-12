---
name: I_LIQUIDATIONDATA
description: "Liquidation Details"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONDATA')/$value
semantic_en: "Liquidation Details"
semantic_vi: "Liquidation Details — CDS view giao diện dựa trên cms_liq."
keywords:
  - "liquidation"
  - "details"
  - "collateral"
  - "object"
  - "reference"
  - "system"
  - "type"
  - "start"
  - "date"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_LIQUIDATIONDATA

**Liquidation Details**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollateralLiquidationUUID` | ✓ | |  | `liq_guid` | `RAW(16)` | Liquidation GUID |
| `ObjectReferenceUUID` |  | |  | `obj_ref_guid` | `RAW(16)` | Object link GUID for liquidation |
| `LiquidationObjectRefSystem` |  | |  | `objsysid` | `CHAR(6)` | Object System Reference ID for Liquidation |
| `LiquidationType` |  | |  | `liq_typ` | `CHAR(6)` | Liquidation Measure Type ID |
| `LiquidationStartDate` |  | |  | `liq_start_date` | `DATS(8)` | Start Date for the Liquidation Measure |
| `LiquidationEndDate` |  | |  | `liq_end_date` | `DATS(8)` | End Date of a Liquidation Measure |
| `LiquidationInitiatedBy` |  | |  | `liq_ini_by` | `CHAR(6)` | Liquidation Initiated By |
| `LiquidationApplicationDate` |  | |  | `appln_date` | `DATS(8)` | Application Date for Enforcement Measure |
| `LiquidationCourtOrderDate` |  | |  | `order_date` | `DATS(8)` | Court's Order Date |
| `LqdtnCourtOrderReceivedDate` |  | |  | `order_rcvd_on` | `DATS(8)` | Decision of Order Received On |
| `LiquidationDecisionClosedDate` |  | |  | `close_dcsn_date` | `DATS(8)` | Date of Decision of Close |
| `LqdtnDecisionCloseReceivedDate` |  | |  | `close_dn_rcvd_on` | `DATS(8)` | Decision of Close Received On |
| `LqdtnGuaranteeCallingAmount` |  | |  | `val_guar_amt` | `CURR(17)` | Value of Guarantee at Time of Liquidation |
| `LqdtnGuaranteeCallingCurrency` |  | |  | `val_guar_curr` | `CUKY(5)` | Liquidation guarantee value currency |
| `LqdtnGuaranteeCallingDate` |  | |  | `call_date_guar` | `DATS(8)` | Calling date for guarantees |
| `LqdtnGuaranteeEnforceableDate` |  | |  | `enfc_date_guar` | `DATS(8)` | Date of Enforceable Title for Guarantees |
| `LqdtnEnfrcmntTitleObtained` |  | |  | `enfc_obtain_ind` | `CHAR(2)` | Enforceable Title Obtained |
| `LiquidationEnforceableDesc` |  | |  | `enfc_title_desc` | `CHAR(40)` | Enforceable title description |
| `LiquidationAffidavitDate` |  | |  | `affidavit_date` | `DATS(8)` | Date of Affidavit |
| `LiquidationAffidavitDesc` |  | |  | `affidavit_desc` | `CHAR(40)` | Affidavit description |
| `LiquidationAmicableDate` |  | |  | `amicable_date` | `DATS(8)` | Date of the Amicable Settlement |
| `LiquidationAmicableDescription` |  | |  | `amicable_desc` | `CHAR(40)` | CMS Liquidation Amicable description |
| `LiquidationRegistrationDate` |  | |  | `reg_date` | `DATS(8)` | Registration Date |
| `LiquidationAdminRcvrReqDte` |  | |  | `req_date` | `DATS(8)` | Date of Request for Admin. Receivership |
| `LiquidationAttachmentDate` |  | |  | `attcmt_date` | `DATS(8)` | Date of Attachment |
| `LqdtnEnfrcmntTtlRqdBfrDte` |  | |  | `title_req_before` | `DATS(8)` | Date Before Which the Enforcement Title is Required |
| `LqdtnOutOfCourtSettlmtDte` |  | |  | `settlement_date` | `DATS(8)` | Date of Out-of-Court Settlement |
| `_LiquidationCashFlow` | | ✓ | | | | |
| `_LiquidationProcess` | | ✓ | | | | |
| `_LiquidationPartner` | | ✓ | | | | |
| `_LiquidationDocument` | | ✓ | | | | |
| `_RealEstateObjectData` | | ✓ | | | | |
| `_CollateralRealEstate` | | ✓ | | | | |
| `_MovableObjectData` | | ✓ | | | | |
| `_ShipObjectData` | | ✓ | | | | |
| `_RightsObjectData` | | ✓ | | | | |
| `_InsuranceObjectData` | | ✓ | | | | |
| `_RealEstateObjectMasterData` | | ✓ | | | | |
| `_CollateralRealEstateMaster` | | ✓ | | | | |
| `_MovableObjectMasterData` | | ✓ | | | | |
| `_RightsObjectMasterData` | | ✓ | | | | |
| `_InsuranceObjectMasterData` | | ✓ | | | | |
| `_CollateralInsurance` | | ✓ | | | | |
| `_LiquidationObjectRefSystem` | | ✓ | | | | |
| `_LiquidationType` | | ✓ | | | | |
| `_LiquidationInitiatedBy` | | ✓ | | | | |
| `_LqdtnGuaranteeCallingCurrency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LiquidationCashFlow` | `I_LiquidationCashFlow` | [0..*] |
| `_LiquidationProcess` | `I_LiquidationProcess` | [0..*] |
| `_LiquidationPartner` | `I_ObjectAssetPartner` | [0..*] |
| `_LiquidationDocument` | `I_ObjectAssetDocument` | [0..*] |
| `_RealEstateObjectData` | `I_RealEstateObjectData` | [0..1] |
| `_CollateralRealEstate` | `I_CollateralRealEstate` | [0..1] |
| `_MovableObjectData` | `I_MovableObjectData` | [0..1] |
| `_ShipObjectData` | `I_ShipObjectData` | [0..1] |
| `_RightsObjectData` | `I_RightsObjectData` | [0..1] |
| `_InsuranceObjectData` | `I_InsuranceObjectData` | [0..1] |
| `_RealEstateObjectMasterData` | `I_RealEstateObjectMasterData` | [0..1] |
| `_CollateralRealEstateMaster` | `I_CollateralRealEstateMaster` | [0..1] |
| `_MovableObjectMasterData` | `I_MovableObjectMasterData` | [0..1] |
| `_RightsObjectMasterData` | `I_RightsObjectMasterData` | [0..1] |
| `_InsuranceObjectMasterData` | `I_InsuranceObjectMasterData` | [0..1] |
| `_CollateralInsurance` | `I_CollateralInsurance` | [0..1] |
| `_LiquidationObjectRefSystem` | `I_LiquidationObjectRefSystem` | [0..1] |
| `_LiquidationType` | `I_LiquidationType` | [0..1] |
| `_LiquidationInitiatedBy` | `I_LiquidationInitiatedBy` | [0..1] |
| `_LqdtnGuaranteeCallingCurrency` | `I_Currency` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONDATA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONDATA')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ILIQD',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl:{
    authorizationCheck: #CHECK,
    personalData:{
        blocking: #BLOCKED_DATA_EXCLUDED
    }
}
@ObjectModel:{
    usageType:{
        serviceQuality: 'A',
        sizeCategory: 'L',
        dataClass: 'MASTER'
    },
    supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    representativeKey: 'CollateralLiquidationUUID'
}
@Metadata:{
    ignorePropagatedAnnotations: true,
    allowExtensions: true
}
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            automatic: true
            }
  }
}
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Liquidation Details'
define view I_LiquidationData
  as select from cms_liq
  association [0..*] to I_LiquidationCashFlow        as _LiquidationCashFlow           on $projection.CollateralLiquidationUUID = _LiquidationCashFlow.CollateralLiquidationUUID
  association [0..*] to I_LiquidationProcess         as _LiquidationProcess            on $projection.CollateralLiquidationUUID = _LiquidationProcess.CollateralLiquidationUUID
  association [0..*] to I_ObjectAssetPartner         as _LiquidationPartner            on $projection.CollateralLiquidationUUID = _LiquidationPartner.ObjectAssetUUID
  association [0..*] to I_ObjectAssetDocument        as _LiquidationDocument           on $projection.CollateralLiquidationUUID = _LiquidationDocument.ObjectAssetUUID
  association [0..1] to I_RealEstateObjectData       as _RealEstateObjectData          on $projection.ObjectReferenceUUID = _RealEstateObjectData.RealEstateUUID
  association [0..1] to I_CollateralRealEstate       as _CollateralRealEstate          on $projection.ObjectReferenceUUID = _CollateralRealEstate.CollateralRealEstateUUID
  association [0..1] to I_MovableObjectData          as _MovableObjectData             on $projection.ObjectReferenceUUID = _MovableObjectData.MovableObjectUUID
  association [0..1] to I_ShipObjectData             as _ShipObjectData                on $projection.ObjectReferenceUUID = _ShipObjectData.ShipObjectUUID
  association [0..1] to I_RightsObjectData           as _RightsObjectData              on $projection.ObjectReferenceUUID = _RightsObjectData.RightsObjectUUID
  association [0..1] to I_InsuranceObjectData        as _InsuranceObjectData           on $projection.ObjectReferenceUUID = _InsuranceObjectData.InsuranceObjectUUID
  association [0..1] to I_RealEstateObjectMasterData as _RealEstateObjectMasterData    on $projection.ObjectReferenceUUID = _RealEstateObjectMasterData.RealEstateUUID
  association [0..1] to I_CollateralRealEstateMaster as _CollateralRealEstateMaster    on $projection.ObjectReferenceUUID = _CollateralRealEstateMaster.CollateralRealEstateUUID
  association [0..1] to I_MovableObjectMasterData    as _MovableObjectMasterData       on $projection.ObjectReferenceUUID = _MovableObjectMasterData.MovableObjectUUID
  association [0..1] to I_RightsObjectMasterData     as _RightsObjectMasterData        on $projection.ObjectReferenceUUID = _RightsObjectMasterData.RightsObjectUUID
  association [0..1] to I_InsuranceObjectMasterData  as _InsuranceObjectMasterData     on $projection.ObjectReferenceUUID = _InsuranceObjectMasterData.InsuranceObjectUUID
  association [0..1] to I_CollateralInsurance        as _CollateralInsurance           on $projection.ObjectReferenceUUID = _CollateralInsurance.CollateralInsuranceUUID
  association [0..1] to I_LiquidationObjectRefSystem as _LiquidationObjectRefSystem    on $projection.LiquidationObjectRefSystem = _LiquidationObjectRefSystem.LiquidationObjectRefSystem
  association [0..1] to I_LiquidationType            as _LiquidationType               on $projection.LiquidationType = _LiquidationType.LiquidationType
  association [0..1] to I_LiquidationInitiatedBy     as _LiquidationInitiatedBy        on $projection.LiquidationInitiatedBy = _LiquidationInitiatedBy.LiquidationInitiatedBy
  association [0..1] to I_Currency                   as _LqdtnGuaranteeCallingCurrency on $projection.LqdtnGuaranteeCallingCurrency = _LqdtnGuaranteeCallingCurrency.Currency
{
  key liq_guid         as CollateralLiquidationUUID,
      obj_ref_guid     as ObjectReferenceUUID,
      @ObjectModel.foreignKey.association: '_LiquidationObjectRefSystem'
      objsysid         as LiquidationObjectRefSystem,
      @ObjectModel.foreignKey.association: '_LiquidationType'
      liq_typ          as LiquidationType,
      liq_start_date   as LiquidationStartDate,
      liq_end_date     as LiquidationEndDate,
      @ObjectModel.foreignKey.association: '_LiquidationInitiatedBy'
      liq_ini_by       as LiquidationInitiatedBy,
      appln_date       as LiquidationApplicationDate,
      order_date       as LiquidationCourtOrderDate,
      order_rcvd_on    as LqdtnCourtOrderReceivedDate,
      close_dcsn_date  as LiquidationDecisionClosedDate,
      close_dn_rcvd_on as LqdtnDecisionCloseReceivedDate,
      @Semantics.amount.currencyCode: 'LqdtnGuaranteeCallingCurrency'
      val_guar_amt     as LqdtnGuaranteeCallingAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_LqdtnGuaranteeCallingCurrency'
      val_guar_curr    as LqdtnGuaranteeCallingCurrency,
      call_date_guar   as LqdtnGuaranteeCallingDate,
      enfc_date_guar   as LqdtnGuaranteeEnforceableDate,
      enfc_obtain_ind  as LqdtnEnfrcmntTitleObtained,
      enfc_title_desc  as LiquidationEnforceableDesc,
      affidavit_date   as LiquidationAffidavitDate,
      affidavit_desc   as LiquidationAffidavitDesc,
      amicable_date    as LiquidationAmicableDate,
      amicable_desc    as LiquidationAmicableDescription,
      reg_date         as LiquidationRegistrationDate,
      req_date         as LiquidationAdminRcvrReqDte,
      attcmt_date      as LiquidationAttachmentDate,
      title_req_before as LqdtnEnfrcmntTtlRqdBfrDte,
      settlement_date  as LqdtnOutOfCourtSettlmtDte,


      _LiquidationCashFlow,
      _LiquidationProcess,
      _LiquidationPartner,
      _LiquidationDocument,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CollateralRealEstate'
      _RealEstateObjectData,
      _CollateralRealEstate,
      _MovableObjectData,
      _ShipObjectData,
      _RightsObjectData,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CollateralInsurance'
      _InsuranceObjectData,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CollateralRealEstateMaster'
      _RealEstateObjectMasterData,
      _CollateralRealEstateMaster,
      _MovableObjectMasterData,
      _RightsObjectMasterData,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CollateralInsurance'
      _InsuranceObjectMasterData,
      _CollateralInsurance,
      _LiquidationObjectRefSystem,
      _LiquidationType,
      _LiquidationInitiatedBy,
      _LqdtnGuaranteeCallingCurrency
}
```
