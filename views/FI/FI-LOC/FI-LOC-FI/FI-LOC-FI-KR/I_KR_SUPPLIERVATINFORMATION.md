---
name: I_KR_SUPPLIERVATINFORMATION
description: KR Suppliervatinformation
app_component: FI-LOC-FI-KR
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-FI
  - interface-view
  - supplier
  - component:FI-LOC-FI-KR
  - lob:Finance
  - bo:Supplier
---
# I_KR_SUPPLIERVATINFORMATION

**KR Suppliervatinformation**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI-KR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Supplier` | ✓ | |  | `lifnr` |
| `TaxInvcNmbrValidityStartDate` | ✓ | |  | `datab` |
| `TaxNumber1` |  | |  | `stcd1` |
| `TaxNumber2` |  | |  | `stcd2` |
| `BusinessType` |  | |  | `gestyp` |
| `IndustryType` |  | |  | `indtyp` |
| `TaxInvoiceRepresentativeName` |  | |  | `repres` |
| `BusinessPlace` |  | |  | `business_place` |
| `ResponsibleDepartmentName` |  | |  | `department_name` |
| `ResponsiblePersonName` |  | |  | `person_name` |
| `ResponsiblePersonEmailAddress1` |  | |  | `person_email1` |
| `ResponsiblePersonEmailAddress2` |  | |  | `person_email2` |
| `_I_Supplier` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_I_Supplier` | `I_Supplier` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'KR Time-Dependent VAT Info for Supplier'    //CE2011
@AbapCatalog.sqlViewName: 'IKRSUPVATINFO'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass:  #MIXED
@ObjectModel.usageType.sizeCategory: #L
@VDM.viewType: #BASIC
//@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@AbapCatalog.preserveKey:true
@Metadata.ignorePropagatedAnnotations:true 
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.supportedCapabilities: 
   [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]     //CE2011

@Consumption.dbHints: [ 'USE_HEX_PLAN' ]

define view I_KR_SupplierVATInformation
  as select from idkr_venvat
  association [1..1] to I_Supplier as _I_Supplier on idkr_venvat.lifnr = _I_Supplier.Supplier
{
  key lifnr           as Supplier,
  key datab           as TaxInvcNmbrValidityStartDate,
      stcd1           as TaxNumber1,
      stcd2           as TaxNumber2,
      gestyp          as BusinessType,
      indtyp          as IndustryType,
      repres          as TaxInvoiceRepresentativeName,
      business_place  as BusinessPlace,
      department_name as ResponsibleDepartmentName,
      person_name     as ResponsiblePersonName,
      person_email1   as ResponsiblePersonEmailAddress1,
      person_email2   as ResponsiblePersonEmailAddress2,
      _I_Supplier
}
```
