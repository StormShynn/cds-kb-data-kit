---
name: I_CONTACTPERSONDEX
description: "Data Extraction for Contact Person"
app_component: LO-MD-BP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONTACTPERSONDEX')/$value
semantic_en: "Data Extraction for Contact Person"
semantic_vi: "Data Extraction for Contact Person — CDS view giao diện dựa trên knvk."
keywords:
  - "data"
  - "extraction"
  - "for"
  - "contact"
  - "person"
  - "customer"
  - "supplier"
  - "function"
  - "department"
tags:
  - LO
  - bo:salesorder
  - component:LO-MD-BP-2CL
  - interface-view
  - LO-MD
  - LO-MD-BP
  - LO-MD-BP-2CL
  - lob:logistics general
---
# I_CONTACTPERSONDEX

**Data Extraction for Contact Person**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONTACTPERSONDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ContactPerson` | ✓ | |  | `parnr` | `NUMC(10)` | Number of Contact Person |
| `Customer` |  | |  | `kunnr` | `CHAR(10)` | Customer Number |
| `Supplier` |  | |  | `lifnr` | `CHAR(10)` | Account Number of Supplier |
| `ContactPersonFunction` |  | |  | `pafkt` | `CHAR(2)` | Contact person function |
| `ContactPersonDepartment` |  | |  | `abtnr` | `CHAR(4)` | Contact person department |
| `SearchTerm` |  | |  | `sortl` | `CHAR(10)` | Sort Field |
| `PersonNumber` |  | |  | `prsnr` | `CHAR(10)` | Person Number |
| `UpperCaseFirstName` |  | |  | `mc_namefir` | `CHAR(25)` | First Name in Uppercase for Search Help |
| `UpperCaseLastName` |  | |  | `mc_namelas` | `CHAR(25)` | Last Name in Uppercase for Search Help |
| `FirstName` |  | |  | `name_first` | `CHAR(40)` | First Name |
| `LastName` |  | |  | `name_last` | `CHAR(40)` | Last Name |
| `ValidityStartDate` |  | |  | `date_from` | `DATS(8)` | Valid-from date - in current Release only 00010101 possible |
| `AddressRepresentationCode` |  | |  | `nation` | `CHAR(1)` | Version ID for International Addresses |
| `IsBusinessPurposeCompleted` |  | |  | `cvp_xblck_k` | `CHAR(1)` | Business Purpose Completed Flag |
| `_Customer` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_CustLink` | | ✓ | | | | |
| `_SuppLink` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Customer` | `I_Customer` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_CustLink` | `I_BPCustomerContactLink` | [0..1] |
| `_SuppLink` | `I_BPSupplierContactLink` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONTACTPERSONDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONTACTPERSONDEX')/$value)*

```abap
@Analytics.technicalName: 'ICONTACTPERSONDEX'
@Analytics.internalName: #LOCAL
@EndUserText.label: 'Data Extraction for Contact Person'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking:  #NOT_REQUIRED
@ObjectModel.representativeKey: 'ContactPerson'
@ObjectModel.sapObjectNodeType.name: 'CustomerContactPerson'
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #ANALYTICAL_DIMENSION,
                                     #EXTRACTION_DATA_SOURCE]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION                                     
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER
@Metadata.ignorePropagatedAnnotations: true
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      mapping:[
                {
                   table: 'KNVK', role: #MAIN,
                    viewElement: ['ContactPerson'],
                    tableElement: ['parnr']
                },
                {
                   table: 'ADRP', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['PersonNumber','ValidityStartDate','AddressRepresentationCode'],
                    tableElement: ['persnumber' , 'date_from','nation']
                }
      ]          
    }
  }
}
@Metadata.allowExtensions: true
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]

define view entity I_ContactPersonDEX 
 as select from  knvk
    left outer to one join adrp on adrp.persnumber = knvk.prsnr
    association to I_Customer as _Customer on knvk.kunnr = _Customer.Customer
    association to I_Supplier as _Supplier on knvk.lifnr = _Supplier.Supplier 
    association[0..1] to I_BPCustomerContactLink  as _CustLink on knvk.parnr = _CustLink.CustomerContact
   
     association[0..1] to I_BPSupplierContactLink  as _SuppLink on knvk.parnr = _SuppLink.SupplierContact 
{
  key knvk.parnr      as ContactPerson, -- Contact Person Number
      knvk.kunnr      as Customer, -- Customer Number
      knvk.lifnr      as Supplier, -- Account Number of Vendor or Creditor
      knvk.pafkt      as ContactPersonFunction, -- Contact person function
      knvk.abtnr      as ContactPersonDepartment, -- Contact person department     
      knvk.sortl     as  SearchTerm, -- Sort field
      knvk.prsnr      as PersonNumber,
      adrp.mc_namefir as UpperCaseFirstName, -- First name in upper case for search help
      adrp.mc_namelas as UpperCaseLastName, -- Last name in upper case for search help
      adrp.name_first as FirstName, -- First Name
      adrp.name_last  as LastName, -- Last Name
      adrp.date_from as  ValidityStartDate,    
      adrp.nation as AddressRepresentationCode,
      //for DCL
      @Semantics.booleanIndicator: true
      knvk.cvp_xblck_k as IsBusinessPurposeCompleted,
     

      _Customer,
      _Supplier,
      _CustLink,
      _SuppLink
   
}
```
