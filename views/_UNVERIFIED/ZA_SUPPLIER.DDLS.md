---
name: ZA_SUPPLIER.DDLS
description: ZA_SUPPLIER.DDLS
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/SAP-samples/btp-abap-cna/blob/c45b86aa6ae2a8910b5d0dc48d1e41b94c896868/src/za_supplier.ddls.asddls
semantic_en: ZA_SUPPLIER.DDLS — CDS view.
semantic_vi: ZA_SUPPLIER.DDLS — CDS view dựa trên ZA_SUPPLIER.DDLS.
keywords:
  - supplier.ddls
  - supplier
  - abap_boolean
tags:
  - PP
  - component:PP
  - lob:manufacturing
  - supplier
---
# ZA_SUPPLIER.DDLS

**ZA_SUPPLIER.DDLS**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/SAP-samples/btp-abap-cna/blob/c45b86aa6ae2a8910b5d0dc48d1e41b94c896868/src/za_supplier.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `)` |  | |  | `key Supplier : abap.char( 10 )` |
| `AlternativePayeeAccountNumber` |  | |  | `abap.char( 10 )` |
| `AlternativePayeeAccountNumb_vc` |  | |  | `RAP_CP_ODATA_VALUE_CONTROL` |
| `AuthorizationGroup` |  | |  | `abap.char( 4 )` |
| `AuthorizationGroup_vc` |  | |  | `RAP_CP_ODATA_VALUE_CONTROL` |
| `CreatedByUser` |  | |  | `abap.char( 12 )` |
| `CreatedByUser_vc` |  | |  | `RAP_CP_ODATA_VALUE_CONTROL` |
| `CreationDate` |  | |  | `RAP_CP_ODATA_V2_EDM_DATETIME` |
| `CreationDate_vc` |  | |  | `RAP_CP_ODATA_VALUE_CONTROL` |
| `Customer` |  | |  | `abap.char( 10 )` |
| `Customer_vc` |  | |  | `RAP_CP_ODATA_VALUE_CONTROL` |
| `PaymentIsBlockedForSupplier` |  | |  | `abap_boolean` |
| `PaymentIsBlockedForSupplier_vc` |  | |  | `RAP_CP_ODATA_VALUE_CONTROL` |
| `PostingIsBlocked` |  | |  | `abap_boolean` |
| `PostingIsBlocked_vc` |  | |  | `RAP_CP_ODATA_VALUE_CONTROL` |
| `PurchasingIsBlocked` |  | |  | `abap_boolean` |
| `PurchasingIsBlocked_vc` |  | |  | `RAP_CP_ODATA_VALUE_CONTROL` |
| `SupplierAccountGroup` |  | |  | `abap.char( 4 )` |
| `SupplierAccountGroup_vc` |  | |  | `RAP_CP_ODATA_VALUE_CONTROL` |
| `SupplierFullName` |  | |  | `abap.char( 220 )` |
| `SupplierFullName_vc` |  | |  | `RAP_CP_ODATA_VALUE_CONTROL` |
| `SupplierName` |  | |  | `abap.char( 80 )` |
| `SupplierName_vc` |  | |  | `RAP_CP_ODATA_VALUE_CONTROL` |
| `VATRegistration` |  | |  | `abap.char( 20 )` |
| `VATRegistration_vc` |  | |  | `RAP_CP_ODATA_VALUE_CONTROL` |
| `BirthDate` |  | |  | `RAP_CP_ODATA_V2_EDM_DATETIME` |
| `BirthDate_vc` |  | |  | `RAP_CP_ODATA_VALUE_CONTROL` |
| `ConcatenatedInternationalLocNo` |  | |  | `abap.char( 20 )` |
| `ConcatenatedInternationalLo_vc` |  | |  | `RAP_CP_ODATA_VALUE_CONTROL` |
| `DeletionIndicator` |  | |  | `abap_boolean` |
| `DeletionIndicator_vc` |  | |  | `RAP_CP_ODATA_VALUE_CONTROL` |
| `FiscalAddress` |  | |  | `abap.char( 10 )` |
| `FiscalAddress_vc` |  | |  | `RAP_CP_ODATA_VALUE_CONTROL` |
| `Industry` |  | |  | `abap.char( 4 )` |
| `Industry_vc` |  | |  | `RAP_CP_ODATA_VALUE_CONTROL` |
| `InternationalLocationNumber1` |  | |  | `abap.numc( 7 )` |
| `InternationalLocationNumber_vc` |  | |  | `RAP_CP_ODATA_VALUE_CONTROL` |
| `InternationalLocationNumber2` |  | |  | `abap.numc( 5 )` |
| `InternationalLocationNumber_v1` |  | |  | `RAP_CP_ODATA_VALUE_CONTROL` |
| `InternationalLocationNumber3` |  | |  | `abap.numc( 1 )` |
| `InternationalLocationNumber_v2` |  | |  | `RAP_CP_ODATA_VALUE_CONTROL` |
| `IsNaturalPerson` |  | |  | `abap.char( 1 )` |
| `IsNaturalPerson_vc` |  | |  | `RAP_CP_ODATA_VALUE_CONTROL` |
| `ResponsibleType` |  | |  | `abap.char( 2 )` |
| `ResponsibleType_vc` |  | |  | `RAP_CP_ODATA_VALUE_CONTROL` |
| `SuplrQltyInProcmtCertfnValidTo` |  | |  | `RAP_CP_ODATA_V2_EDM_DATETIME` |
| `SuplrQltyInProcmtCertfnVali_vc` |  | |  | `RAP_CP_ODATA_VALUE_CONTROL` |
| `SuplrQualityManagementSystem` |  | |  | `abap.char( 4 )` |
| `SuplrQualityManagementSyste_vc` |  | |  | `RAP_CP_ODATA_VALUE_CONTROL` |
| `SupplierCorporateGroup` |  | |  | `abap.char( 10 )` |
| `SupplierCorporateGroup_vc` |  | |  | `RAP_CP_ODATA_VALUE_CONTROL` |
| `SupplierProcurementBlock` |  | |  | `abap.char( 2 )` |
| `SupplierProcurementBlock_vc` |  | |  | `RAP_CP_ODATA_VALUE_CONTROL` |
| `TaxNumber1` |  | |  | `abap.char( 16 )` |
| `TaxNumber1_vc` |  | |  | `RAP_CP_ODATA_VALUE_CONTROL` |
| `TaxNumber2` |  | |  | `abap.char( 11 )` |
| `TaxNumber2_vc` |  | |  | `RAP_CP_ODATA_VALUE_CONTROL` |
| `TaxNumber3` |  | |  | `abap.char( 18 )` |
| `TaxNumber3_vc` |  | |  | `RAP_CP_ODATA_VALUE_CONTROL` |
| `TaxNumber4` |  | |  | `abap.char( 18 )` |
| `TaxNumber4_vc` |  | |  | `RAP_CP_ODATA_VALUE_CONTROL` |
| `TaxNumber5` |  | |  | `abap.char( 60 )` |
| `TaxNumber5_vc` |  | |  | `RAP_CP_ODATA_VALUE_CONTROL` |
| `TaxNumberResponsible` |  | |  | `abap.char( 18 )` |
| `TaxNumberResponsible_vc` |  | |  | `RAP_CP_ODATA_VALUE_CONTROL` |
| `TaxNumberType` |  | |  | `abap.char( 2 )` |
| `TaxNumberType_vc` |  | |  | `RAP_CP_ODATA_VALUE_CONTROL` |
| `SuplrProofOfDelivRlvtCode` |  | |  | `abap.char( 1 )` |
| `SuplrProofOfDelivRlvtCode_vc` |  | |  | `RAP_CP_ODATA_VALUE_CONTROL` |
| `BR_TaxIsSplit` |  | |  | `abap_boolean` |
| `BR_TaxIsSplit_vc` |  | |  | `RAP_CP_ODATA_VALUE_CONTROL` |
| `DataExchangeInstructionKey` |  | |  | `abap.char( 2 )` |
| `DataExchangeInstructionKey_vc` |  | |  | `RAP_CP_ODATA_VALUE_CONTROL` |

## Source Code

*Source: [https://github.com/SAP-samples/btp-abap-cna/blob/c45b86aa6ae2a8910b5d0dc48d1e41b94c896868/src/za_supplier.ddls.asddls](https://github.com/SAP-samples/btp-abap-cna/blob/c45b86aa6ae2a8910b5d0dc48d1e41b94c896868/src/za_supplier.ddls.asddls)*

```abap
/********** GENERATED on 11/25/2021 at 20:48:17 by CB9980000000**************/
 @OData.entitySet.name: 'A_Supplier' 
 @OData.entityType.name: 'A_SupplierType' 
 define root abstract entity ZA_SUPPLIER { 
 key Supplier : abap.char( 10 ) ; 
 @Odata.property.valueControl: 'AlternativePayeeAccountNumb_vc' 
 AlternativePayeeAccountNumber : abap.char( 10 ) ; 
 AlternativePayeeAccountNumb_vc : RAP_CP_ODATA_VALUE_CONTROL ; 
 @Odata.property.valueControl: 'AuthorizationGroup_vc' 
 AuthorizationGroup : abap.char( 4 ) ; 
 AuthorizationGroup_vc : RAP_CP_ODATA_VALUE_CONTROL ; 
 @Odata.property.valueControl: 'CreatedByUser_vc' 
 CreatedByUser : abap.char( 12 ) ; 
 CreatedByUser_vc : RAP_CP_ODATA_VALUE_CONTROL ; 
 @Odata.property.valueControl: 'CreationDate_vc' 
 CreationDate : RAP_CP_ODATA_V2_EDM_DATETIME ; 
 CreationDate_vc : RAP_CP_ODATA_VALUE_CONTROL ; 
 @Odata.property.valueControl: 'Customer_vc' 
 Customer : abap.char( 10 ) ; 
 Customer_vc : RAP_CP_ODATA_VALUE_CONTROL ; 
 @Odata.property.valueControl: 'PaymentIsBlockedForSupplier_vc' 
 PaymentIsBlockedForSupplier : abap_boolean ; 
 PaymentIsBlockedForSupplier_vc : RAP_CP_ODATA_VALUE_CONTROL ; 
 @Odata.property.valueControl: 'PostingIsBlocked_vc' 
 PostingIsBlocked : abap_boolean ; 
 PostingIsBlocked_vc : RAP_CP_ODATA_VALUE_CONTROL ; 
 @Odata.property.valueControl: 'PurchasingIsBlocked_vc' 
 PurchasingIsBlocked : abap_boolean ; 
 PurchasingIsBlocked_vc : RAP_CP_ODATA_VALUE_CONTROL ; 
 @Odata.property.valueControl: 'SupplierAccountGroup_vc' 
 SupplierAccountGroup : abap.char( 4 ) ; 
 SupplierAccountGroup_vc : RAP_CP_ODATA_VALUE_CONTROL ; 
 @Odata.property.valueControl: 'SupplierFullName_vc' 
 SupplierFullName : abap.char( 220 ) ; 
 SupplierFullName_vc : RAP_CP_ODATA_VALUE_CONTROL ; 
 @Odata.property.valueControl: 'SupplierName_vc' 
 SupplierName : abap.char( 80 ) ; 
 SupplierName_vc : RAP_CP_ODATA_VALUE_CONTROL ; 
 @Odata.property.valueControl: 'VATRegistration_vc' 
 VATRegistration : abap.char( 20 ) ; 
 VATRegistration_vc : RAP_CP_ODATA_VALUE_CONTROL ; 
 @Odata.property.valueControl: 'BirthDate_vc' 
 BirthDate : RAP_CP_ODATA_V2_EDM_DATETIME ; 
 BirthDate_vc : RAP_CP_ODATA_VALUE_CONTROL ; 
 @Odata.property.valueControl: 'ConcatenatedInternationalLo_vc' 
 ConcatenatedInternationalLocNo : abap.char( 20 ) ; 
 ConcatenatedInternationalLo_vc : RAP_CP_ODATA_VALUE_CONTROL ; 
 @Odata.property.valueControl: 'DeletionIndicator_vc' 
 DeletionIndicator : abap_boolean ; 
 DeletionIndicator_vc : RAP_CP_ODATA_VALUE_CONTROL ; 
 @Odata.property.valueControl: 'FiscalAddress_vc' 
 FiscalAddress : abap.char( 10 ) ; 
 FiscalAddress_vc : RAP_CP_ODATA_VALUE_CONTROL ; 
 @Odata.property.valueControl: 'Industry_vc' 
 Industry : abap.char( 4 ) ; 
 Industry_vc : RAP_CP_ODATA_VALUE_CONTROL ; 
 @Odata.property.valueControl: 'InternationalLocationNumber_vc' 
 InternationalLocationNumber1 : abap.numc( 7 ) ; 
 InternationalLocationNumber_vc : RAP_CP_ODATA_VALUE_CONTROL ; 
 @Odata.property.valueControl: 'InternationalLocationNumber_v1' 
 InternationalLocationNumber2 : abap.numc( 5 ) ; 
 InternationalLocationNumber_v1 : RAP_CP_ODATA_VALUE_CONTROL ; 
 @Odata.property.valueControl: 'InternationalLocationNumber_v2' 
 InternationalLocationNumber3 : abap.numc( 1 ) ; 
 InternationalLocationNumber_v2 : RAP_CP_ODATA_VALUE_CONTROL ; 
 @Odata.property.valueControl: 'IsNaturalPerson_vc' 
 IsNaturalPerson : abap.char( 1 ) ; 
 IsNaturalPerson_vc : RAP_CP_ODATA_VALUE_CONTROL ; 
 @Odata.property.valueControl: 'ResponsibleType_vc' 
 ResponsibleType : abap.char( 2 ) ; 
 ResponsibleType_vc : RAP_CP_ODATA_VALUE_CONTROL ; 
 @Odata.property.valueControl: 'SuplrQltyInProcmtCertfnVali_vc' 
 SuplrQltyInProcmtCertfnValidTo : RAP_CP_ODATA_V2_EDM_DATETIME ; 
 SuplrQltyInProcmtCertfnVali_vc : RAP_CP_ODATA_VALUE_CONTROL ; 
 @Odata.property.valueControl: 'SuplrQualityManagementSyste_vc' 
 SuplrQualityManagementSystem : abap.char( 4 ) ; 
 SuplrQualityManagementSyste_vc : RAP_CP_ODATA_VALUE_CONTROL ; 
 @Odata.property.valueControl: 'SupplierCorporateGroup_vc' 
 SupplierCorporateGroup : abap.char( 10 ) ; 
 SupplierCorporateGroup_vc : RAP_CP_ODATA_VALUE_CONTROL ; 
 @Odata.property.valueControl: 'SupplierProcurementBlock_vc' 
 SupplierProcurementBlock : abap.char( 2 ) ; 
 SupplierProcurementBlock_vc : RAP_CP_ODATA_VALUE_CONTROL ; 
 @Odata.property.valueControl: 'TaxNumber1_vc' 
 TaxNumber1 : abap.char( 16 ) ; 
 TaxNumber1_vc : RAP_CP_ODATA_VALUE_CONTROL ; 
 @Odata.property.valueControl: 'TaxNumber2_vc' 
 TaxNumber2 : abap.char( 11 ) ; 
 TaxNumber2_vc : RAP_CP_ODATA_VALUE_CONTROL ; 
 @Odata.property.valueControl: 'TaxNumber3_vc' 
 TaxNumber3 : abap.char( 18 ) ; 
 TaxNumber3_vc : RAP_CP_ODATA_VALUE_CONTROL ; 
 @Odata.property.valueControl: 'TaxNumber4_vc' 
 TaxNumber4 : abap.char( 18 ) ; 
 TaxNumber4_vc : RAP_CP_ODATA_VALUE_CONTROL ; 
 @Odata.property.valueControl: 'TaxNumber5_vc' 
 TaxNumber5 : abap.char( 60 ) ; 
 TaxNumber5_vc : RAP_CP_ODATA_VALUE_CONTROL ; 
 @Odata.property.valueControl: 'TaxNumberResponsible_vc' 
 TaxNumberResponsible : abap.char( 18 ) ; 
 TaxNumberResponsible_vc : RAP_CP_ODATA_VALUE_CONTROL ; 
 @Odata.property.valueControl: 'TaxNumberType_vc' 
 TaxNumberType : abap.char( 2 ) ; 
 TaxNumberType_vc : RAP_CP_ODATA_VALUE_CONTROL ; 
 @Odata.property.valueControl: 'SuplrProofOfDelivRlvtCode_vc' 
 SuplrProofOfDelivRlvtCode : abap.char( 1 ) ; 
 SuplrProofOfDelivRlvtCode_vc : RAP_CP_ODATA_VALUE_CONTROL ; 
 @Odata.property.valueControl: 'BR_TaxIsSplit_vc' 
 BR_TaxIsSplit : abap_boolean ; 
 BR_TaxIsSplit_vc : RAP_CP_ODATA_VALUE_CONTROL ; 
 @Odata.property.valueControl: 'DataExchangeInstructionKey_vc' 
 DataExchangeInstructionKey : abap.char( 2 ) ; 
 DataExchangeInstructionKey_vc : RAP_CP_ODATA_VALUE_CONTROL ; 
 
 @OData.property.name: 'to_SupplierCompany' 
//A dummy on-condition is required for associations in abstract entities 
//On-condition is not relevant for runtime 
 _SupplierCompany : association [0..*] to ZA_SUPPLIERCOMPANY on 1 = 1; 
 @OData.property.name: 'to_SupplierPurchasingOrg' 
//A dummy on-condition is required for associations in abstract entities 
//On-condition is not relevant for runtime 
 _SupplierPurchasingOrg : association [0..*] to ZA_SUPPLIERPURCHASINGORG on 1 = 1; 
 @OData.property.name: 'to_SupplierText' 
//A dummy on-condition is required for associations in abstract entities 
//On-condition is not relevant for runtime 
 _SupplierText : association [0..*] to ZA_SUPPLIERTEXT on 1 = 1; 
 }
```
