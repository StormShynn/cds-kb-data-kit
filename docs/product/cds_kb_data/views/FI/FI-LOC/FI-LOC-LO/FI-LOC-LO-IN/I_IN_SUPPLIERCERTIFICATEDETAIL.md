---
name: I_IN_SUPPLIERCERTIFICATEDETAIL
description: "Supplier Certificate detail for India"
app_component: FI-LOC-LO-IN
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_IN_SUPPLIERCERTIFICATEDETAIL')/$value
semantic_en: "Supplier Certificate detail for India"
semantic_vi: "Supplier Certificate detail for India — CDS view giao diện dựa trên idsau_cr_data."
keywords:
  - "supplier"
  - "certificate"
  - "detail"
  - "for"
  - "india"
  - "company"
  - "code"
  - "number"
  - "valid"
  - "date"
tags:
  - FI
  - bo:companycode
  - component:FI-LOC-LO-IN
  - FI-LOC
  - FI-LOC-LO
  - FI-LOC-LO-IN
  - interface-view
  - lob:finance
  - lob:logistics general
  - supplier
---
# I_IN_SUPPLIERCERTIFICATEDETAIL

**Supplier Certificate detail for India**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-IN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_IN_SUPPLIERCERTIFICATEDETAIL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Supplier` | ✓ | |  | `lifnr` | `CHAR(10)` | Account Number of Supplier |
| `CompanyCode` | ✓ | |  | `bukrs` | `CHAR(4)` | Company Code |
| `CertificateId` | ✓ | |  | `cert_id` | `CHAR(10)` | Certificate ID |
| `IN_CertificateNumber` | ✓ | |  | `cert_no` | `CHAR(30)` | Certification Number |
| `IN_ValidFromDate` | ✓ | |  | `valid_from` | `DATS(8)` | Certificate Valid From Date |
| `IN_ValidToDate` | ✓ | |  | `valid_to` | `DATS(8)` | Certificate Valid to Date |
| `IN_SuplrCertRegCityName` | ✓ | |  | `reg_city` | `CHAR(25)` | Registration City |
| `IN_SuplrCertExmpType` |  | |  | `exempt` | `CHAR(1)` | Exemption Area |
| `IN_SuplrCertExmpRsnTxt` |  | |  | `exempt_reason` | `CHAR(50)` | Exempt Reason |
| `IN_SuplrCertStatus` |  | |  | `status` | `CHAR(1)` | Certification Status |
| `IN_SuplrCertIsMainCertificate` |  | |  | `main_cert` | `CHAR(1)` | Main Certificate |
| `CreationDate` |  | |  | `creation_date` | `DATS(8)` | Certificate Creation Date |
| `IN_SuplrCertDescription1Text` |  | |  | `description1` | `CHAR(150)` | Description 1 |
| `IN_SuplrCertDescription2Text` |  | |  | `description2` | `CHAR(100)` | Description 2 |
| `IN_SuplrCertAdditional1Date` |  | |  | `date1` | `DATS(8)` | Date 1 |
| `IN_SuplrCertAdditional2Date` |  | |  | `date2` | `DATS(8)` | Date 2 |
| `IN_SupplierCertificateNumber1` |  | |  | `number1` | `NUMC(15)` | Number 1 |
| `IN_SupplierCertificateNumber2` |  | |  | `number2` | `NUMC(15)` | Number 2 |
| `IsBusinessPurposeCompleted` |  | | `_Supplier` | `IsBusinessPurposeCompleted` | `CHAR(1)` | Business Purpose Completed Flag |
| `_Supplier` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Supplier` | `I_Supplier` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_IN_SUPPLIERCERTIFICATEDETAIL')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_IN_SUPPLIERCERTIFICATEDETAIL')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl: {
authorizationCheck: #MANDATORY,
personalData.blocking: #REQUIRED,
personalData.blockingIndicator: ['IsBusinessPurposeCompleted']
}
@EndUserText.label: 'Supplier Certificate detail for India'
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType:#BASIC
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE ]
@ObjectModel.usageType:{
    serviceQuality: #C,
    sizeCategory: #XL,
    dataClass: #MIXED
}
define view entity I_IN_SupplierCertificateDetail 
  as select from idsau_cr_data
  association[0..1] to I_Supplier    as _Supplier on $projection.Supplier = _Supplier.Supplier
  association[0..1] to I_CompanyCode as _CompanyCode on $projection.CompanyCode = _CompanyCode.CompanyCode
{
        @ObjectModel.foreignKey.association: '_Supplier'
    key lifnr as Supplier,
        @ObjectModel.foreignKey.association: '_CompanyCode'    
    key bukrs as CompanyCode,
    key cert_id as CertificateId,
    key cert_no as IN_CertificateNumber,
        @Semantics.businessDate.from: true
    key valid_from as IN_ValidFromDate,
        @Semantics.businessDate.to: true
    key valid_to as IN_ValidToDate,
    key reg_city as IN_SuplrCertRegCityName,  
    exempt as IN_SuplrCertExmpType, 
    exempt_reason as IN_SuplrCertExmpRsnTxt, 
    status as IN_SuplrCertStatus,
    @Semantics.booleanIndicator: true  
    main_cert as IN_SuplrCertIsMainCertificate,
    creation_date as CreationDate,
    description1 as IN_SuplrCertDescription1Text,  
    description2 as IN_SuplrCertDescription2Text,  
    date1 as IN_SuplrCertAdditional1Date,
    date2 as IN_SuplrCertAdditional2Date,
    number1 as IN_SupplierCertificateNumber1,
    number2 as IN_SupplierCertificateNumber2,
             @Semantics.booleanIndicator: true
   _Supplier.IsBusinessPurposeCompleted as IsBusinessPurposeCompleted,
    //Associations
    _Supplier,
    _CompanyCode    
}
```
